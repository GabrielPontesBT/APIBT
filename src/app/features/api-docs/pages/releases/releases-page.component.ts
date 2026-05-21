import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Release } from './releases.data';
import { ReleasesService } from '../../services/releases.service';
import { VersionService, VersionId } from '../../../../core/services/version.service';

@Component({
  selector: 'app-releases-page',
  templateUrl: './releases-page.component.html',
  styleUrls: ['./releases-page.component.scss'],
  standalone: false
})
export class ReleasesPageComponent implements OnInit {
  release: Release | null = null;
  showChat = true;

  constructor(
    private route: ActivatedRoute,
    private releasesService: ReleasesService,
    private versionService: VersionService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      tap(params => {
        const version = params.get('version') as VersionId | null;
        if (version) {
          this.versionService.setVersion(version);
          this.showChat = version !== 'v4' && version !== 'bpay';
        }
      }),
      switchMap(params => this.releasesService.getReleaseById(params.get('id') ?? ''))
    ).subscribe(release => {
      this.release = release;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Release } from './releases.data';
import { ReleasesService } from '../../services/releases.service';

@Component({
  selector: 'app-releases-page',
  templateUrl: './releases-page.component.html',
  styleUrls: ['./releases-page.component.scss'],
  standalone: false
})
export class ReleasesPageComponent implements OnInit {
  release: Release | null = null;

  constructor(
    private route: ActivatedRoute,
    private releasesService: ReleasesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => this.releasesService.getReleaseById(params.get('id') ?? ''))
    ).subscribe(release => {
      this.release = release;
    });
  }
}

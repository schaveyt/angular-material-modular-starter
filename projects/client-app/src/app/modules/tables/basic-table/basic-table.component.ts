import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { RepositoryService } from '../services/repository.service';
import { merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { ElementTableItem } from '../entities/element-table-item.model';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<ElementTableItem>();
  isLoadingResults: boolean;
  isRateLimitReached: boolean;
  resultsLength: any;

  constructor(private repositoryService: RepositoryService) {

  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'text'];

  ngOnInit() {
    this.repositoryService.getAllElements().subscribe(res => {
      this.dataSource.data = res as ElementTableItem[];
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

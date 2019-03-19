import { Component, AfterViewInit, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';
import { RepositoryService } from '../services/repository.service';
import { ElementTableItem } from '../entities/element-table-item.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-basic-dnd-table',
  templateUrl: './basic-dnd-table.component.html',
  styleUrls: ['./basic-dnd-table.component.css']
})
export class BasicTableDnDComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<ElementTableItem[]>;
  dataSource = new MatTableDataSource<ElementTableItem>();
  isLoadingResults: boolean;
  isRateLimitReached: boolean;
  resultsLength: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['position', 'id', 'text', 'status'];

  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit() {
    this.repositoryService.getAllElements().subscribe(res => {
      this.dataSource.data = res as ElementTableItem[];
    });
  }

  dropTable(event: CdkDragDrop<ElementTableItem[]>) {

    // determine the pevious index of the draged item.
    //
    const prevIndex = this.dataSource.data.findIndex((d) => d === event.item.data);

    // move the dragged item to its new position in the underlyng array
    //
    moveItemInArray(this.dataSource.data, prevIndex, event.currentIndex);

    // we must now *deep* clone the underlying array and reset the Observalbe's array. By
    // doing this, it will trigger the MatTable to automatically refresh.
    //
    this.dataSource.data = JSON.parse(JSON.stringify(this.dataSource.data));
  }
}

import { ElementTableItem } from './element-table-item.model';

export interface ElementTableApi {
    items: ElementTableItem[];
    total_count: number;
  }
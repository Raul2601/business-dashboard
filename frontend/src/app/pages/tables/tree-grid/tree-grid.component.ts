import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  count?: number;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      { name: 'Apple', count: 10 },
      { name: 'Banana', count: 20 },
      { name: 'Fruit loops', count: 30 },
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          { name: 'Broccoli', count: 10 },
          { name: 'Brussel sprouts', count: 20 },
        ]
      }, {
        name: 'Orange',
        children: [
          { name: 'Pumpkins', count: 30 },
          { name: 'Carrots', count: 40 },
        ]
      },
    ]
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  count: number;
  level: number;
}

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.css']
})
export class TreeGridComponent {

  displayedColumns: string[] = ['name', 'count'];

  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      count: node.count,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level,
    node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}

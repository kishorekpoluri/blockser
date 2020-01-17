import { Component, OnInit } from '@angular/core';
import { BlockService } from '../service/block.service';
import { MatTableDataSource } from '@angular/material/table';
import { Block } from '../model/block.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss'],
  providers: [ BlockService ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class BlockListComponent implements OnInit {

  displayedColumns: string[] = ['id','timestamp','actionsCount'];
  dataSource=new MatTableDataSource<Block>();
  isDataLoading:boolean=false;
  expandedElement: Block | null;
  constructor(private blockService:BlockService) { }

  ngOnInit() {
    this.getBlocks();
  }

  refresh(){
    this.getBlocks();
  }

  getBlocks(){
    this.isDataLoading=true;
    this.blockService.getBlockInfo()
      .then(blockInfo=>{
        this.blockService.getBlocks(blockInfo['head_block_num'],10)
          .then((successResponses)=>{
            let blocks:Block[]=[];
            successResponses.forEach((successResponse)=>{
              console.log(successResponse);
              let block:Block=new Block();
              block.id=successResponse.id;
              block.timestamp=successResponse.timestamp;
              block.producer=successResponse.producer;
              block.blockNum=successResponse.block_num;
              block.rawBlock=successResponse;
              let actionsCount=0;
              successResponse.transactions.forEach((transaction)=>{
                if(transaction.trx.transaction){
                  actionsCount=actionsCount+transaction.trx.transaction.actions.length;
                }
              })
              block.actionsCount=actionsCount;
              blocks.push(block);
            })
            this.dataSource.data=blocks;
            this.isDataLoading=false;
          })
      });
  }


}

import { Injectable } from '@angular/core';
import {Observable,forkJoin} from "rxjs";
import {Block} from "../model/block.model";
import { Api, JsonRpc, RpcError } from 'eosjs';
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig'; 
const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
//const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
const rpc = new JsonRpc('https://api.eossweden.org', { fetch});
//const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
@Injectable({
  providedIn: 'root'
})
export class BlockService {

  getBlockInfo(){
    return rpc.get_info();
  }

  getBlocks(lastBlockNumber:number,numberOfBlocksToGet:number){
    let blockNumberOrId=lastBlockNumber;
    console.log("Head Block Num "+blockNumberOrId);
    let promises=[];
    for(let i:number=blockNumberOrId;i>blockNumberOrId-numberOfBlocksToGet;i--){
      promises.push(rpc.get_block(i));
    }
    return Promise.all(promises);
  }
}

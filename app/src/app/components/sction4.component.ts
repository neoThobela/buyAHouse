/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-sction4',
  templateUrl: './sction4.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class sction4Component {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_5YYQURIfFuf6HQjk(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_5YYQURIfFuf6HQjk(bh) {
    try {
      bh = this.sd_yp9J4CXYB5ATDhUK(bh);
      //appendnew_next_sd_5YYQURIfFuf6HQjk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5YYQURIfFuf6HQjk');
    }
  }

  //appendnew_flow_sction4Component_start

  sd_yp9J4CXYB5ATDhUK(bh) {
    try {
      //appendnew_next_sd_yp9J4CXYB5ATDhUK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yp9J4CXYB5ATDhUK');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_sction4Component_Catch
}

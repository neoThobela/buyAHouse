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
  selector: 'bh-setion3',
  templateUrl: './setion3.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class setion3Component {
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
      this.sd_jjKOgVcGOrfhOdSE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jjKOgVcGOrfhOdSE(bh) {
    try {
      bh = this.sd_VtFVojllLnuZPRRp(bh);
      //appendnew_next_sd_jjKOgVcGOrfhOdSE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jjKOgVcGOrfhOdSE');
    }
  }

  //appendnew_flow_setion3Component_start

  sd_VtFVojllLnuZPRRp(bh) {
    try {
      //appendnew_next_sd_VtFVojllLnuZPRRp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VtFVojllLnuZPRRp');
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
  //appendnew_flow_setion3Component_Catch
}

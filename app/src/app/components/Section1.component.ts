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
  selector: 'bh-Section1',
  templateUrl: './Section1.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Section1Component {
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
      this.sd_vIF1IKzk91V04Q0n(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_vIF1IKzk91V04Q0n(bh) {
    try {
      bh = this.sd_p3lm6lMv2BCPhBUc(bh);
      //appendnew_next_sd_vIF1IKzk91V04Q0n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vIF1IKzk91V04Q0n');
    }
  }

  //appendnew_flow_Section1Component_start

  sd_p3lm6lMv2BCPhBUc(bh) {
    try {
      this.page.section1 = [];
      bh = this.sd_5vvzY8l1OW8XTjPi(bh);
      //appendnew_next_sd_p3lm6lMv2BCPhBUc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p3lm6lMv2BCPhBUc');
    }
  }

  sd_5vvzY8l1OW8XTjPi(bh) {
    try {
      const page = this.page;
      page.section1 = ['About', 'Services', 'Project', 'Contact'];
      //appendnew_next_sd_5vvzY8l1OW8XTjPi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5vvzY8l1OW8XTjPi');
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
  //appendnew_flow_Section1Component_Catch
}

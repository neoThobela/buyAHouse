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
  selector: 'bh-section5',
  templateUrl: './section5.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class section5Component {
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
      this.sd_yIh7CaSuQvYdbEc6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_yIh7CaSuQvYdbEc6(bh) {
    try {
      bh = this.sd_9P5wqmpfmAT48fLX(bh);
      //appendnew_next_sd_yIh7CaSuQvYdbEc6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yIh7CaSuQvYdbEc6');
    }
  }

  //appendnew_flow_section5Component_start

  sd_9P5wqmpfmAT48fLX(bh) {
    try {
      this.page.section5 = undefined;
      bh = this.sd_Hr8CUKBpbcdU4Qs2(bh);
      //appendnew_next_sd_9P5wqmpfmAT48fLX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9P5wqmpfmAT48fLX');
    }
  }

  sd_Hr8CUKBpbcdU4Qs2(bh) {
    try {
      const page = this.page;
      page.section5 = {
        images: [
          '/Web/Images/face1.jpg',
          '/Web/Images/face2.jpg',
          '/Web/Images/face3.jpg',
          '/Web/Images/face4.jpg',
          '/Web/Images/face5.jpg',
          '/Web/Images/face6.jpg',
          '/Web/Images/face7.jpg',
          '/Web/Images/face8.jpg',
          '/Web/Images/face9.jpg',
        ],
        heading: 'Trusted by over 150+ organziations in more than 50 countries',
        icon: 'format_quote',
        paragraph:
          '. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      };
      //appendnew_next_sd_Hr8CUKBpbcdU4Qs2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Hr8CUKBpbcdU4Qs2');
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
  //appendnew_flow_section5Component_Catch
}

import React, { Component } from "react";
import { Layout, Icon } from "antd";

import "antd/dist/antd.css";

const { Footer } = Layout;

export default class FooterCls extends Component {
  render() {
    return (
      <Footer id="footer-antd">
        <div className="row">
          <div className="col-12 text-right mt-2">
            <h1>
              <Icon className="mr-3" type="google" />
              <Icon className="mr-3" type="facebook" />
              <Icon className="mr-3" type="twitter" />
              <Icon className="mr-3" type="youtube" />
              <i className="fab fa-line mr-5"></i>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center m-5">
            <p>
              พันธมิตรต่างชาติ | BabaJob (India) | Bdjobs (Bangladesh) |
              Brighter Monday(East Africa) | Catho (Brazil) | Jobberman (West
              Africa) | JobStreet (S.E.Asia) |
            </p>
            <p>
              Jora (Thailand) | Manager (Brazil) | OCC Mundial (Mexico) | Seaman
              Jobsite (Philippines) | SEEK (Australia) | Work
              Abroad(Philippines) | WorkanaZhaopin (China)
            </p>
          </div>
        </div>
      </Footer>
    );
  }
}

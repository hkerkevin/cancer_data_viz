import React, { useEffect, useState, Component } from "react";
import { drawChart } from './charts/BarChartDemographics';
import { Card, CardHeader, CardBody, CardTitle, Row, Col, CardFooter } from "reactstrap";


function Demographics() {
  const [data, setData] = useState([]);

  useEffect(() => {
      drawChart();
  }, []);
  
  return (
    <>
      <div className="content">

        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Number of people in sample</p>
                      <CardTitle tag="p">570</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart-pie-36 text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Largest Ethnic or Racial Group in Sample</p>
                      <CardTitle tag="p">Hispanic</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-sound-wave text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Highest Percent of Population Malignant</p>
                      <CardTitle tag="p">Black</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Percent Benign From Sample</p>
                      <CardTitle tag="p">63%</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
   <Col md="12">
     <Card>
    <CardHeader>
      <h3 className="title">Cancer stage and malignancy by race/ethnicity</h3>
    </CardHeader>
    <CardBody tag="h5">
      <div>This chart shows the proportion of patients with benign/malignant cancers and in different cancer stages, by race/ethnicity. Hovering over the paths will show the number of patients in each category.</div>
      <br></br>
      <iframe src="http://www.tor-johnson.com/datadocs/project_sankey.html" width="1250" height="400" frameborder="0" scrolling="no"></iframe>

    </CardBody>    
    </Card>
   </Col>
 </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                
                <h3 className="title">Data Sample Summarized by Demographics</h3>
              </CardHeader>
              <CardBody>
              <div class="commands">
                    <span class="sort" id="reset">Reset</span>
                  </div>

                  <div class="commands">
                    <span class="sort" id="orderName">Order alphabetic by name </span> &nbsp;&nbsp;&nbsp;
                    <span class="sort" id="gdp_a">Order ascending by value </span> &nbsp;&nbsp;&nbsp;
                    <span class="sort" id="gdp_b">Order descending by value</span>
                  </div>

                  <div id="chart"></div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Demographics;

import React, { useEffect, useState, Component } from "react";
import { drawChart } from './charts/StageBarChart.js';
import { Card, CardHeader, CardBody, CardTitle, Row, Col, CardFooter } from "reactstrap";

function Stage() {
  const [data, setData] = useState([]);

  useEffect(() => {
      drawChart(400, 600);
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
                      <i className="nc-icon nc-chart-pie-36 text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Stage 1</p>
                      <CardTitle tag="p">38% of sample</CardTitle>
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
                    <div className="icon-big text-center icon-warning ">
                      <i className="nc-icon nc-chart-pie-36 text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Stage 2</p>
                      <CardTitle tag="p">25% of sample</CardTitle>
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
                      <p className="card-category">Stage 3</p>
                      <CardTitle tag="p">27% of sample</CardTitle>
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
                      <p className="card-category">Stage 4</p>
                      <CardTitle tag="p">10% of sample</CardTitle>
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
      <h5 className="title">Data Sample Summarized by Cancer Stage</h5>
    </CardHeader>
    <CardBody>
      <div> This chart displays statistics from our sample by cancer stage.</div>
      <div id="barchart1"></div>
    </CardBody>
    </Card>
   </Col>
 </Row>
 

 
      </div>
    </>
  );
}

export default Stage;

import React, { useEffect, useState, Component } from "react";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, CardTitle, CardFooter } from "reactstrap";

import { drawAverageAreaChart } from './charts/AverageTumorArea.js';
import { drawAveragePerimiterChart } from './charts/AverageTumorPerimiter.js';
import { drawAverageConcavityChart } from './charts/AverageTumorConcavity.js';
import { drawAverageCompactnessChart } from './charts/AverageTumorCompactness.js';
import { drawAverageRadiusChart } from './charts/AverageTumorRadius.js';
import { drawAverageSmoothnessChart } from './charts/AverageTumorSmoothness.js';
import { drawChart } from './charts/StageBarChart.js';



function Tumor() {

  const [data, setData] = useState([]);

  useEffect(() => {
    drawChart(400, 600);
  }, []);
  useEffect(() => {
    drawAverageAreaChart(400, 600);
  }, []);
  useEffect(() => {
    drawAveragePerimiterChart(400, 600);
  }, []);
  useEffect(() => {
    drawAverageConcavityChart(400, 600);
  }, []);
  useEffect(() => {
    drawAverageCompactnessChart(400, 600);
  }, []);
  useEffect(() => {
    drawAverageRadiusChart(400, 600);
  }, []);
  useEffect(() => {
    drawAverageSmoothnessChart(400, 600);
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
                      <p className="card-category">Avg Stage</p>
                      <CardTitle tag="p">Stage 2</CardTitle>
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
                      <p className="card-category">Avg Tumor Perimeter</p>
                      <CardTitle tag="p">92 cm</CardTitle>
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
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Avg Tumor Radius</p>
                      <CardTitle tag="p">14 cm</CardTitle>
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
                      <p className="card-category">Avg Smoothness</p>
                      <CardTitle tag="p">0.1 cm</CardTitle>
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
   <Col md="6">
     <Card>
    <CardHeader>
      <h5 className="title">Cancer Stage Cases</h5>
    </CardHeader>
    <CardBody>
      <div> This chart displays statistics from our sample summarized by number of patients per cancer stage.</div>
      <div id="barchart1"></div>
    </CardBody>
    </Card>
   </Col>
   <Col md="6">
     <Card>
    <CardHeader>
      <h5 className="title">Area</h5>
    </CardHeader>
    <CardBody>
      <div> This chart displays statistics from our sample by tumor area per cancer stage.</div>
      <div id="averagearea"></div>
    </CardBody>
    </Card>
    
   </Col>
 </Row>        
 <Row>
      <Col md="6">
   <Card>
    <CardHeader>
      <h5 className="title">Smoothness</h5>
    </CardHeader>
    <CardBody>
      <div> This chart displays statistics from our sample by tumor smoothness per cancer stage.</div>
      <div id="averagesmoothness"></div>
    </CardBody>
    </Card>
    </Col>
 <Col md="6">
     <Card>
    <CardHeader>
      <h5 className="title">Radius</h5>
    </CardHeader>
    <CardBody>
      <div> This chart displays statistics from our sample by tumor radius per cancer stage.</div>
      <div id="averageradius"></div>
    </CardBody>
    </Card>
    
   </Col>
 </Row>
 <Row>
 <Col md="6">
   <Card>
    <CardHeader>
      <h5 className="title">Perimeter</h5>
    </CardHeader>
    <CardBody>
      <div> This chart displays statistics from our sample by tumor perimeter per cancer stage.</div>
      <div id="averageperimiter"></div>
    </CardBody>
    </Card>
    </Col>
    <Col md="6">
     <Card>
    <CardHeader>
      <h5 className="title">Concavity</h5>
    </CardHeader>
    <CardBody>
      <div> This chart displays statistics from our sample by tumor area per cancer stage.</div>
      <div id="averageconcavity"></div>
    </CardBody>
    </Card>
    
   </Col>
 </Row>
 <Row>
   <Col md="6">
   <Card>
    <CardHeader>
      <h5 className="title">Compactness</h5>
    </CardHeader>
    <CardBody>
      <div> This chart displays statistics from our sample by tumor perimiter per cancer stage.</div>
      <div id="averagecompactness"></div>
    </CardBody>
    </Card>
    </Col>
 </Row>

      </div>
    </>
  );
}

export default Tumor;

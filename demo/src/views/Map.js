
import React, { useEffect, useState }  from "react";
import {   
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,} from "reactstrap";


import { drawBubble } from './charts/BubbleChart.js';
import { drawMap } from './charts/MapChart.js';
import { drawMapbox } from './charts/MapboxChart.js';
import { drawSankey } from './charts/SankeyChart.js';


function Geography() {
  const [data, setData] = useState([]);

  useEffect(() => {
      drawBubble(400, 600);
  }, []);

  useEffect(() => {
    drawMap(400, 600);
  }, []);

  useEffect(() => {
    drawMapbox(400, 600);
  }, []);

  useEffect(() => {
    drawSankey(400, 600);
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
                      <p className="card-category">Patients treated at hospital (per 10k)</p>
                      <CardTitle tag="p">0.76</CardTitle>
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
                      <p className="card-category">Zip code with most patients treated hospital</p>
                      <CardTitle tag="p">90650</CardTitle>
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
                      <p className="card-category">Average distance to the hospital (miles)</p>
                      <CardTitle tag="p">28.0</CardTitle>
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
                      <i className="nc-icon nc-single-02 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">yearly cancer deaths in area (per 10k)</p>
                      <CardTitle tag="p">15.0</CardTitle>
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
      <h3 className="title">Geographic reach</h3>
    </CardHeader>
    <CardBody tag="h5">
      <div>This chart shows the geographical distribution by cancer stage of patients receiving treatment at the hospital (blue "H").</div>
      <div>Markers can be filtered by benign or malignant cancers. Hovering over the markers will display the actual distance to the hospital</div>
      <br></br>
      <iframe src="http://www.tor-johnson.com/datadocs/project_mapbox.html" width="100%" height="850" frameborder="0"></iframe>
    </CardBody>    
    </Card>
   </Col>
 </Row>

 <Row>
   <Col md="12">
     <Card>
    <CardHeader>
      <h3 className="title">Health care access focus areas</h3>
    </CardHeader>
    <CardBody tag="h5">
      <div> Zip codes with high cancer rates per capita should have higher treatment rates at the hospital; areas with relatively low treatment rates at the hospital could benefit from more outreach efforts. </div>
      <br></br>
      <h6>Cancer deaths in 2019:</h6>
      <div id="map1"></div>
      <h6>Cancer patients at the hospital vs. cancer deaths, by zip code</h6>
    </CardBody> 
    <div id="bubble1"></div>   
    </Card>
   </Col>
 </Row>
      </div>
    </>
  );
}

export default Geography;


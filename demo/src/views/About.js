import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  CardFooter,
} from "reactstrap";
// core components

function About() {
  return (
    <>
      <div className="content">
      <Row>
          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart-bar-32 text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">View by</p>
                      <CardTitle tag="p">Tumor and Stage</CardTitle>
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
          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-badge text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">View By</p>
                      <CardTitle tag="p">Demographics</CardTitle>
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
          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-world-2 text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">View by</p>
                      <CardTitle tag="p">Geography</CardTitle>
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
                <CardTitle tag="h1">Dashboard Purpose and Instructions for Use</CardTitle>
              </CardHeader>
              <CardBody tag="h5">
                <p>City of Hope is a specialized hospital and research center in the greater Los Angeles area, serving many patients from far outside the local region. The hospital employs clinicians and researchers with expertise in many different types of cancers (and other diseases), and patients come to the hospital at various clinical stages; from diagnosis to palliative care. </p>
                <p>We use anonymized cancer patient data from Kaggle to create a dashboard that City of Hope can use in combination with their own data to aid in overseeing the flow of tens of thousands of patients that come in each year. The dashboard greatly enhances other information City of Hope collects, which in turn helps guide clinical management of cancer patients. </p>
                <p>The paper that describes the development of the dashboard can be found <a href="https://www.overleaf.com/read/wsbtystbmmjc">on Overleaf</a>.</p>
                <p class="blockquote blockquote-primary">
                  This dashboard contains exploratory graphs by tumor and stage, demographics, and geographic location. Please select a tab on the left navigation bar to explore the data by your area of interest.
                </p>
                </CardBody>
              
            </Card>
          </Col>
        </Row>

        
      </div>
    </>
  );
}

export default About;

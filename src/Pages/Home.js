import { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, Card, Row, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
     <CarouselBox />
     <Container >
        <h2 className="text-center m-4">Bestseller</h2>
        <Row md={2}>
          <Card>
            <Card.Img style={{marginTop: "5px"}}
            variant="top"
            src="https://turistim.ru/files/img/2015/10/istoriya_shou_alkazar.jpg"
            />
            <Card.Body>
              <Card.Title>
                Alcazar
              </Card.Title>
              <Card.Text>
              Кабаре-шоу трансвеститов: динамичные танцевальные номера, красочные костюмы и современный сценический дизайн.
              </Card.Text>
              <Button variant="primary">Link to Wiki</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
            style={{marginTop: "5px"}}
            variant="top"
            src="https://turistim.ru/files/img/2015/10/istoriya_shou_alkazar.jpg"
            />
            <Card.Body>
              <Card.Title>
                Alcazar
              </Card.Title>
              <Card.Text>
              Кабаре-шоу трансвеститов: динамичные танцевальные номера, красочные костюмы и современный сценический дизайн.
              </Card.Text>
              <Button variant="primary">Link to Wiki</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
            style={{marginTop: "5px"}}
            variant="top"
            src="https://turistim.ru/files/img/2015/10/istoriya_shou_alkazar.jpg"
            />
            <Card.Body>
              <Card.Title>
                Alcazar
              </Card.Title>
              <Card.Text>
              Кабаре-шоу трансвеститов: динамичные танцевальные номера, красочные костюмы и современный сценический дизайн.
              </Card.Text>
              <Button variant="primary">Link to Wiki</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
            style={{marginTop: "5px"}}
            variant="top"
            src="https://turistim.ru/files/img/2015/10/istoriya_shou_alkazar.jpg"
            />
            <Card.Body>
              <Card.Title>
                Alcazar
              </Card.Title>
              <Card.Text>
              Кабаре-шоу трансвеститов: динамичные танцевальные номера, красочные костюмы и современный сценический дизайн.
              </Card.Text>
              <Button variant="primary">Link to Wiki</Button>
            </Card.Body>
          </Card>
        </Row>
     </Container>
     </>
    );
  }
}

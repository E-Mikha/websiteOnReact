import { Component } from "react";
import {Container, Row, Col, ListGroup, Card} from "react-bootstrap"

export default class Blog extends Component {
  render() {
    return(
      <Container>
        <Row>
          <Col>
            <div style={{marginTop: "5px"}} class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                width={150}
                height={150}
                className="mr-3"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/5c/d3/22/a-unique-creation-standing.jpg?w=500&h=400&s=1"
                alt="Temple"
                />
              </div>
                <div class="flex-grow-1 ms-3">
                  <h5>The Sanctuary of Truth</h5>
                  <p>
                  Храм Истины — деревянный храм в Паттайе. Храм находится на берегу Сиамского залива, окружён парком. Высота храма — около 105 метров. Строительство храма началось в 1981 году по инициативе тайского бизнесмена Лека Вирияпана.
                  </p>
                </div>
            </div>

            <div style={{marginTop: "5px"}} class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                width={150}
                height={150}
                className="mr-3"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/5c/d3/22/a-unique-creation-standing.jpg?w=500&h=400&s=1"
                alt="Temple"
                />
              </div>
                <div class="flex-grow-1 ms-3">
                  <h5>The Sanctuary of Truth</h5>
                  <p>
                  Храм Истины — деревянный храм в Паттайе. Храм находится на берегу Сиамского залива, окружён парком. Высота храма — около 105 метров. Строительство храма началось в 1981 году по инициативе тайского бизнесмена Лека Вирияпана.
                  </p>
                </div>
            </div>

            <div style={{marginTop: "5px"}} class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                width={150}
                height={150}
                className="mr-3"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/5c/d3/22/a-unique-creation-standing.jpg?w=500&h=400&s=1"
                alt="Temple"
                
                />
              </div>
                <div class="flex-grow-1 ms-3">
                  <h5>The Sanctuary of Truth</h5>
                  <p>
                  Храм Истины — деревянный храм в Паттайе. Храм находится на берегу Сиамского залива, окружён парком. Высота храма — около 105 метров. Строительство храма началось в 1981 году по инициативе тайского бизнесмена Лека Вирияпана.
                  </p>
                </div>
            </div>

            <div style={{marginTop: "5px", marginBottom: "5px"}} class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                width={150}
                height={150}
                className="mr-3"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/5c/d3/22/a-unique-creation-standing.jpg?w=500&h=400&s=1"
                alt="Temple"
                />
              </div>
                <div class="flex-grow-1 ms-3">
                  <h5>The Sanctuary of Truth</h5>
                  <p>
                  Храм Истины — деревянный храм в Паттайе. Храм находится на берегу Сиамского залива, окружён парком. Высота храма — около 105 метров. Строительство храма началось в 1981 году по инициативе тайского бизнесмена Лека Вирияпана.
                  </p>
                </div>
            </div>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Category</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Price Low</ListGroup.Item>
                <ListGroup.Item>Price Hight</ListGroup.Item>
                <ListGroup.Item>Best Sell</ListGroup.Item>
                <ListGroup.Item>Days</ListGroup.Item>
                <ListGroup.Item>New</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                Паттайя – таиландский город на восточном побережье Сиамского залива, известный своими пляжами. Ещё в 1960-е годы он представлял собой тихую рыбацкую деревню, а теперь привлекает тысячи туристов благодаря курортным отелям, высотным жилым домам, торговым центрам, барам с эстрадными представлениями и клубам, открытым круглосуточно. Недалеко от города на склоне холма расположен храм Пхра-Яй с золотой статуей Будды высотой 18 метров. В Паттайе разбито несколько полей для гольфа с уникальным ландшафтом, откуда открывается чудесный вид на залив.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

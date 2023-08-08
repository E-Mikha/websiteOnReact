import { Component } from "react";
import {Col, Container, Tab, Nav, Row} from "react-bootstrap"
import "../App.css"

export default class AboutUs extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column" mt-2>
                <Nav.Item>
                  <Nav.Link eventKey="first">Cambodia</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">River</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third">Zoo</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fourth">Waterpark</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fifth">Garden</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img className="tabPaneImg" src="https://cdn.britannica.com/24/77424-050-4FF80B58/Angkor-Wat-Cambodia.jpg"/>
                  <p>Камбоджа – страна в Юго-Восточной Азии с разнообразным рельефом: на ее территории расположены низменные равнины, дельта реки Меконг, горы и побережье Сиамского залива. Столица страны, Пномпень, славится своим Центральным рынком в стиле ар-деко, великолепным Королевским дворцом и Национальным музеем, в экспозиции которого представлены археологические находки и произведения камбоджийского искусства. На северо-западе страны находится огромный каменный храмовый комплекс Ангкор-Ват, построенный во времена Кхмерской империи.</p>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <img className="tabPaneImg" src="https://www.exotravel.com/blog/wp-content/uploads/2016/02/River-Kwai-Nature-and-Adventure.jpg"/>
                  <p>Кхвэяй — река на северо-западе Таиланда. Получила мировую известность под искажённым названием Квай по фильму «Мост через реку Квай». Суточные колебания уровня воды в реке достигают полутора метров. Длина реки — 380 км.</p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <img className="tabPaneImg" src="https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_135853/20221115094852_bk0LV/jpg"/>
                  <p>Khao Kheow Open Zoo (Thai: สวนสัตว์เปิดเขาเขียว) — большой зоопарк в Таиланде. Он занимает площадь около 2000 акров и содержит более 8000 животных из более чем 300 видов. Зоопарк расположен в Си Рача, провинция Чонбури, на востоке Таиланда.</p>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <img className="tabPaneImg" src="https://www.thaiticketmajor.com/travel/images/837-ramayana-water-park/poster-l.jpg"/>
                  <p>Аквапарк Рамаяна — тайский тематический аквапарк, расположенный в 15 километрах к югу от Паттайи, в 1,5 часах езды на автомобиле от Бангкока. На сегодня это самый большой аквапарк в Таиланде и один из крупнейших во всей Юго-Восточной Азии.</p>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <img className="tabPaneImg" src="https://i0.wp.com/toasttothailand.com/wp-content/uploads/2019/09/Nong-Nooch-French-Garden.jpg?fit=1024%2C632&ssl=1"/>
                  <p>Тропический парк Нонг Нуч — это 600 акров (2,4 кв. км) ботанических садов и местных достопримечательностей, расположенных на 163-м километре Сукхумвит-роуд в провинции Чонбури, Таиланд, (близи курортного города Паттайя).</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}

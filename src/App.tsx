import * as React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {} from '';
import { Home, SymbolDetails, HeaderBar } from './view/index';
import { Layout } from 'antd';
import { Route, Switch, HashRouter } from 'react-router-dom';

const { Footer, Content, Header } = Layout;

class App extends React.Component {
  public render() {
    const header = <Route path="/" component={HeaderBar} />;
    const content = (
      <Switch>
        <Route exact path="/stocks/:selectedSymbol" component={SymbolDetails} />
        {/* <Route exact path="/sectors/:selectedSector" component={Sectors} /> */}
        <Route exact path="/" component={Home} />
      </Switch>
    );
    const footer = (
      <div>
        <p>
          Data provided for free by
          <a target="_blank" href="https://iextrading.com/developer/">
            IEX
          </a>
          . View
          <a target="_blank" href="https://iextrading.com/api-exhibit-a/">
            IEX’s Terms of Use
          </a>
          .
        </p>
      </div>
    );

    return (
      <HashRouter>
        <Layout className="app-layout">
          <Header className="app-layout__header">{header}</Header>
          <Content className="app-layout__content">{content}</Content>
          <Footer className="app_footer">{footer}</Footer>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;

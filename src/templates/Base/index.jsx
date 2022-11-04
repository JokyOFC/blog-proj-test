import P from 'prop-types';
import { TopHeader } from '../../components/TopHeader/';
import { Menu } from '../../components/Menu';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';

import { GoTop } from '../../components/GoTop';

export const BaseTemplate = ({ settings, children }) => {
  return (
    <Styled.Container>
      <Menu
        links={settings.menuLink}
        blogName={settings.blogName}
        logo={settings.logo.url}
      />

      <Styled.HeaderContainer>
        <TopHeader
          description={settings.blogDescription}
          backgroundImage={settings.logo.url}
          showText={true}
        >
          {settings.blogName}
        </TopHeader>
      </Styled.HeaderContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <GoTop />

      <Styled.FooterContainer>
        <Footer footerHtml={settings.text} />
      </Styled.FooterContainer>
    </Styled.Container>
  );
};

BaseTemplate.propTypes = {
  children: P.node.isRequired,
};

import { WidgetSection, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <WidgetSection>
      <Title>{title}</Title>
      {children}
    </WidgetSection>
  );
};

// export default Section;
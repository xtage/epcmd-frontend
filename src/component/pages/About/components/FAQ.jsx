import { Accordion, Container, Title, Loader, Text } from "@mantine/core";
import { useAboutPage } from "../../../../lib/queries/About/useBriefProfile";

import classes from "../styles/Faq.module.css";
import PageLoader from '../../../common/component/Loader/Loader'

const FAQ = () => {
  const { data, isLoading } = useAboutPage();
  const FaqData = data?.faq_items ?? [];

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      {isLoading ? (
        <Text ta={'center'} mt={'2rem'}>No Data Found</Text>
      ) : FaqData.length > 0 ? (
        <Accordion variant="separated" radius={'xl'} mt={'lg'} >
          {FaqData.map((faq) => (
            <Accordion.Item key={faq.id} className={classes.item} value={faq.id.toString()} bd={'none'}>
              <Accordion.Control bg={'#d0e8fa'} className={classes.question}>{faq.question}</Accordion.Control>
              <Accordion.Panel className={classes.answer}>
                <Text dangerouslySetInnerHTML={{ __html: faq.rendered_answer }} />
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <Text ta="center" mt="md">
          No FAQs available
        </Text>
      )}
    </Container>
  );
};

export default FAQ;

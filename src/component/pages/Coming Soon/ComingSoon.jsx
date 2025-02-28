import React from "react";
import { Flex, Title, Text, Box } from "@mantine/core";
import { Twitter, Instagram, Facebook, Youtube, Send } from "lucide-react";
import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <Flex justify="center" align="center" h="100vh" className={styles.body}>
      <Box className={styles.wrapper}>
        <Box mb={'md'}>
          <Title order={1} className={styles.title}>
            Coming Soon<span className={styles.dot}>.</span>
          </Title>
          <Text className={styles.subtitle}>
            We are working hard to bring you an innovative and user-friendly
            platform. Stay tuned for updates! 
          </Text>
        </Box>
        <Flex justify="center" gap="md" className={styles.icons}>
          <a
            href="https://twitter.com/IndiaGov"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://youtube.com/IndiaGov"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://instagram.com/IndiaGov"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://telegram.com/IndiaGov"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <Send size={24} />
          </a>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ComingSoon;

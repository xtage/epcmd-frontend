import { Container, Table, Title, Text, Paper } from "@mantine/core";
import React from "react";

const BecomeMember = () => {
  return (
    <Container size="md">
      <Title order={2} mb="md">
        Information for Payment of Subscription for the Year 2025-26
      </Title>
      <Paper shadow="sm" p="md" withBorder>
        <Title order={3} mb="sm">
          For Associate/Ordinary Members
        </Title>
        <Table striped withBorder>
          <thead>
            <tr>
              <th>Export during previous year 2024-25</th>
              <th>Subscription for 2025-26 (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to 20 Lakhs</td>
              <td>6,000</td>
            </tr>
            <tr>
              <td>Above 20 Lakhs to 50 Lakhs</td>
              <td>9,000</td>
            </tr>
            <tr>
              <td>Above 50 Lakhs to 1 Crore</td>
              <td>12,000</td>
            </tr>
            <tr>
              <td>Above 1 Crore to 5 Crore</td>
              <td>20,000</td>
            </tr>
            <tr>
              <td>Above 5 Crore to 10 Crore</td>
              <td>25,000</td>
            </tr>
            <tr>
              <td>Above 10 Crore to 25 Crore</td>
              <td>35,000</td>
            </tr>
            <tr>
              <td>Above 25 Crore to 50 Crore</td>
              <td>40,000</td>
            </tr>
            <tr>
              <td>Above 50 Crore to 100 Crore</td>
              <td>50,000</td>
            </tr>
            <tr>
              <td>Above 100 Crore to 500 Crore</td>
              <td>60,000</td>
            </tr>
            <tr>
              <td>Above 500 Crore</td>
              <td>75,000</td>
            </tr>
          </tbody>
        </Table>
      </Paper>
      <Paper shadow="sm" p="md" withBorder mt="md">
        <Title order={3} mb="sm">
          For Other Members
        </Title>
        <Table striped withBorder>
          <thead>
            <tr>
              <th>Export during previous year 2024-25</th>
              <th>Subscription for 2025-26 (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Institutions, Chambers of Commerce & Trade Associations</td>
              <td>12,000</td>
            </tr>
            <tr>
              <td>Affiliate Members</td>
              <td>6,500</td>
            </tr>
          </tbody>
        </Table>
      </Paper>
      <Text mt="md">
        Note: Refund amounts are not paid for any dues like Admission / Resignation Fees.
      </Text>
    </Container>
  );
};

export default BecomeMember;

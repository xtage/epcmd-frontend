import { Paper, Box, Text, Table, List } from "@mantine/core";
const FeeStructure = () => {
  const elements = [
    {
      membership: "Standard Member",
      annual: 12.011,
      registration: "C",
      renewal: "Carbon",
    },
    {
      membership: "Premium Member",
      annual: 14.007,
      registration: "N",
      renewal: "Nitrogen",
    },
    {
      membership: "Corporate Member",
      annual: 88.906,
      registration: "Y",
      renewal: "Yttrium",
    },
    {
      membership: "Startup Member",
      annual: 137.33,
      registration: "Ba",
      renewal: "Barium",
    },
  ];
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.membership}</Table.Td>
      <Table.Td>{element.annual}</Table.Td>
      <Table.Td>{element.registration}</Table.Td>
      <Table.Td>{element.renewal}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper className="relativePositioning" p={"2.5rem"}>
      <Box>
        <Text fw={400}>
          We offer a transparent and structured fee system for our membership
          plans. Below is a detailed breakdown of the fees associated with each
          membership category.
        </Text>
      </Box>
      <Box mt={'xl'}>
        <Table withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Membership Category</Table.Th>
              <Table.Th>Annual Fee (INR)</Table.Th>
              <Table.Th>Registration Fee (One-Time)</Table.Th>
              <Table.Th>Renewal Fee (INR)</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Box>
      <Box mt={'xl'}>
        <Text fw={700}>Additional Charges</Text>
        <List>
          <List.Item>
            Late Renewal Fee: ₹2,000 if renewal is done after the 15-day grace
            period.
          </List.Item>
          <List.Item>
            Upgrade Fee: If upgrading from one category to another, only the
            difference in fees will be charged.
          </List.Item>
          <List.Item>
            Cancellation Policy: No refunds after membership approval.
          </List.Item>
        </List>
      </Box>
      <Box mt={'xl'}>
        <Text fw={700}>Payment Methods</Text>
        <List fw={400}>
          <List.Item>
            Online Payment (Credit/Debit Card, Net Banking, UPI)
          </List.Item>
          <List.Item>Bank Transfer (Details available on request)</List.Item>
          <List.Item>Cheque/Demand Draft</List.Item>
        </List>
      </Box>
    </Paper>
  );
};

export default FeeStructure;

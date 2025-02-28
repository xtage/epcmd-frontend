import {
  Center,
  Group,
  ScrollArea,
  Table,
  Text,
  TextInput,
  UnstyledButton,
  Box,
  Pagination,
  Select,
  Flex,
} from "@mantine/core";
import { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronUp, BoxSelect } from "lucide-react";
import classes from "../styles/Table.module.css";

function Th({ children, reversed, sorted, onSort }) {
  const Icon = sorted ? (reversed ? ChevronUp : ChevronDown) : BoxSelect;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size={16} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

const TableWithPagination = ({
  data,
  columns,
  title,
  defaultRowsPerPage = 10,
}) => {
  const PAGE_SIZES = ["10", "25", "50", "100"];
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  // Filtering & Sorting Memoization
  const filteredAndSortedData = useMemo(() => {
    let filteredData = data.filter((item) =>
      columns.some((col) =>
        item[col.accessor]
          ?.toString()
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );

    if (sortBy) {
      filteredData = [...filteredData].sort((a, b) => {
        if (!a[sortBy] || !b[sortBy]) return 0;
        return reverseSortDirection
          ? b[sortBy].localeCompare(a[sortBy])
          : a[sortBy].localeCompare(b[sortBy]);
      });
    }

    return filteredData;
  }, [data, search, sortBy, reverseSortDirection]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredAndSortedData.length / rowsPerPage);
  const startIndex = (activePage - 1) * rowsPerPage;
  const paginatedData = filteredAndSortedData.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setActivePage(1); // Reset to first page when searching
  };

  const handleSort = (field) => {
    setReverseSortDirection(sortBy === field ? !reverseSortDirection : false);
    setSortBy(field);
  };

  const handlePageSizeChange = (value) => {
    setRowsPerPage(Number(value));
    setActivePage(1); // Reset to first page when changing page size
  };

  return (
    <Box p={"md"}>
      <ScrollArea>
        <Group justify={"space-between"} align="center">
          <Text>{title}</Text>
          <TextInput
            placeholder="Search..."
            mb="md"
            value={search}
            onChange={handleSearchChange}
            w={"20%"}
            leftSection={<Search size={16} />}
          />
        </Group>
        <Table
          horizontalSpacing="md"
          verticalSpacing="xs"
          miw={700}
          layout="fixed"
        >
          <Table.Thead>
            <Table.Tr>
              {columns.map((col, index) => (
                <Th
                  key={index}
                  sorted={sortBy === col.accessor}
                  reversed={reverseSortDirection}
                  onSort={() => handleSort(col.accessor)}
                >
                  {col.label}
                </Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {/* {paginatedData.length > 0 ? (
                paginatedData.map((row, index) => (
                  <Table.Tr key={index}>
                    <Table.Td>{startIndex + index + 1}</Table.Td>
                    <Table.Td>{row.panel_name}</Table.Td>
                    <Table.Td>{row.email}</Table.Td>
                    <Table.Td>{row.company}</Table.Td>
                  </Table.Tr>
                )) */}
            {paginatedData.length > 0 ? (
              paginatedData.map((row, index) => (
                <Table.Tr key={index}>
                  {columns.map((col) => (
                    <Table.Td key={col.accessor}>{row[col.accessor]}</Table.Td>
                  ))}
                </Table.Tr>
              ))
            ) : (
              <Table.Tr>
                <Table.Td colSpan={columns.length}>
                  <Text fw={500} ta="center">
                    Nothing found
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </ScrollArea>
      <Group mt="md" justify="flex-end">
        <Flex align={"center"} justify={"flex-end"}>
          <Text>Rows per page:</Text>
          <Select
            w={"80px"}
            size={"xs"}
            value={String(rowsPerPage)}
            data={PAGE_SIZES}
            onChange={handlePageSizeChange}
            allowDeselect={false}
            withCheckIcon={false}
            rightSectionWidth={0}
            mx={"xs"}
          />
        </Flex>

        <Pagination.Root
          total={totalPages}
          page={activePage}
          onChange={setActivePage}
        >
          <Group gap={5} justify="center">
            <Pagination.First />
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
            <Pagination.Last />
          </Group>
        </Pagination.Root>
      </Group>
    </Box>
  );
};

export default TableWithPagination;

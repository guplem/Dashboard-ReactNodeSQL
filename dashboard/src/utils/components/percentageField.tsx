import { useRecordContext } from "react-admin";

export const PercentageField = ({ source, decimalPlaces = 2 }: { source: string; decimalPlaces?: number }) => {
  const record = useRecordContext();
  return record ? <span>{Number.isInteger(record[source] * 100) ? (record[source] * 100).toFixed(0) : (record[source] * 100).toFixed(decimalPlaces)}%</span> : null;
};

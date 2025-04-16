import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

type Props = {
  selectedCourse: string;
  onChange: (course: string) => void;
};

const CourseSelector: React.FC<Props> = ({ selectedCourse, onChange }) => {
  return (
    <FormControl fullWidth sx={{ mt: 3 }}>
      <InputLabel sx={{ color: 'primary.main' }}>コースを選択</InputLabel>
      <Select
        value={selectedCourse}
        onChange={(e) => onChange(e.target.value)}
        sx={{ backgroundColor: "#fff" }}
      >
        <MenuItem value="">選択してください</MenuItem>
        <MenuItem value="HTMLCSS">HTML・CSS 初歩</MenuItem>
        <MenuItem value="TSReact">TypeScript + Reactコース</MenuItem>
      </Select>
    </FormControl>

  );
};

export default CourseSelector;
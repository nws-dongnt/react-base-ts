export const TEXT_LINE_CLAMP = (line = 1) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  wordWrap: "break-word",
  wordBreak: "break-word",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: line,
});

export const FLEX_CENTER_CENTER = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const FLEX_END_CENTER = {
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
};

export const FLEX_CENTER_START = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const FLEX_START_CENTER = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
};

export const FLEX_START_START = {
  display: "flex",
  justifyContent: "start",
  alignItems: "start",
};

export const FLEX_BETWEEN_CENTER = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const FLEX_EVENLY_CENTER = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
};

export const FLEX_COL_START_START = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
};

export const FLEX_COL_START_CENTER = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
};

export const FLEX_COL_CENTER_START = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
};

export const FLEX_COL_CENTER_CENTER = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const FLEX_COL_BETWEEN_CENTER = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
};

export const FLEX_COL_BETWEEN_START = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
};

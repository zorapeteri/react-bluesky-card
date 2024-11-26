function formatPostTime(date: Date) {
  const timeFormatted = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const dateFormatted = date.toLocaleString('en-US', {
    month: 'short',
    year: 'numeric',
    day: 'numeric',
  });
  return `${dateFormatted} at ${timeFormatted}`;
}

export default formatPostTime;

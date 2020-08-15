export default {
  launch_year: Array.apply(0, Array(15)).map(
    (v, k) => ({ title: String(k + 2006), value: String(k + 2006) }),
  ),
  launch_success: [
    { title: 'True', value: 'true' },
    { title: 'False', value: 'false' },
  ],
  land_success: [
    { title: 'True', value: 'true' },
    { title: 'False', value: 'false' },
  ],
};

export default function getSpaceXData() {
  return new Promise((resolve) => {
    process.nextTick(() => resolve([{ missionId: 'Falcon 6' }]));
  });
}

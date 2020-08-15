import Axios from 'axios';

import convertToQS from '../utils/querystring';

/* This function takes all the raw data and optimizes it.
  If we use the API data directly, then our HTML will become heavy with
  data which is required for Hydration.
*/
const organizeData = (data = []) => data.map((item) => {
  let landSuccess = item.rocket.first_stage.cores[0].land_success || false;
  if (item.rocket.first_stage.cores.length > 1) {
    landSuccess = item.rocket.first_stage.cores.findIndex(
      (core) => core.land_success === true,
    ) > -1;
  }
  return {
    flightNumber: item.flight_number,
    missionName: item.mission_name,
    missionIds: item.mission_ids,
    launchYear: item.launch_year,
    launchSuccess: item.launch_success || false,
    landSuccess,
    missionPatch: item.links.mission_patch_small,
    articleLink: item.links.article_link,
  };
});

export default async (query) => {
  // Convert object to QueryString
  const queryString = convertToQS(query);
  try {
    const { data } = await Axios.get(process.env.REACT_APP_SPACEX_API + queryString);
    return organizeData(data);
  } catch (err) {
    throw new Error(err);
  }
};

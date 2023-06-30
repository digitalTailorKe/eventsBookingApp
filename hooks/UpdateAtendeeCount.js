import axiosClient from "../src/axiosClient";

const updateTotalAttended = async () => {
  try {
    // Fetch the data from the API for counting
    const response = await axiosClient.get("/attendee-count");
    const { data } = response;
    const count = data.attendanceCount;
    return count;
  } catch (error) {
    console.error(error);
  }
};

export default updateTotalAttended;

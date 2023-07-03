import axiosClient from "../src/axiosClient";

const getConfirmedVisitors = async () => {
  try {
    // Fetch the data from the API for counting
    const response = await axiosClient.get("/printing");
    const { data } = response;
    const newData = data?.map((item) => {
      return {
        id: item.id,
        name: item.full_name,
        position: item.job_title,
        company: item.business_name,
        phone: item.phone,
        email: item.email,
        title: item.title,
        address: item.address,
        serial: item.confirmation.passkey,
        notes: [
          {
            businessInterest: item.sectors?.map((sector) => sector.name),
          },
          {
            sectorOfInterest: item.sectors?.map((sector) => sector.name),
          },
        ],
      };
    });
    return newData;
  } catch (error) {
    console.error(error);
  }
};

export default getConfirmedVisitors;

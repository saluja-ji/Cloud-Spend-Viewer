/**
 * Data Service
 * Handles fetching cloud spend data from the static JSON file
 */

export const fetchCloudSpendData = async () => {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cloud spend data:', error);
    throw error;
  }
};

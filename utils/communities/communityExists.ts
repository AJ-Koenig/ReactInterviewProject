const MOCK_COMMUNITIES = ['test', 'askme'];

export const communityExists = (community: string) => {
  return MOCK_COMMUNITIES.includes(community);
};

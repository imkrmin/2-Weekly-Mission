const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getUserProfile() {
  const response = await fetch(`${BASE_URL}/sample/user`);

  if (!response.ok) {
    throw new Error("프로필을 가져오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

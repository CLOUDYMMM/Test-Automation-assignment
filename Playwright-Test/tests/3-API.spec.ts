import { test, expect } from '@playwright/test';


  test('Get user profile success (id=12)', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/12', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.data).toMatchObject({
      id: 12,
      email: 'rachel.howell@reqres.in',
      first_name: 'Rachel',
      last_name: 'Howell',
      avatar: 'https://reqres.in/img/faces/12-image.jpg',
    });
  });

  test('Get user profile not found (id=1234)', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/1234', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    expect(response.status()).toBe(404);
    const body = await response.json();
    expect(body).toEqual({});
  });

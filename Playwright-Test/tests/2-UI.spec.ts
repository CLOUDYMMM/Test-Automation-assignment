import { test, expect } from '@playwright/test';

test("ทดสอบการเข้าสู่ระบบสำเร็จ (Login Success)", async ({ page, context }) => {
    await test.step('เปิดหน้าเว็บและเข้าสู่ระบบ (Open Website and Login)', async () => {
        await page.goto('https://the-internet.herokuapp.com/login');
        await expect(page.getByRole('heading', { name: 'Login Page' })).toHaveText('Login Page');
        await page.locator("#username").fill('tomsmith');
        await page.locator("#password").fill('SuperSecretPassword!');
        await page.getByRole('button', { name: 'Login' }).click();
    });
    await test.step('ตรวจสอบการเข้าสู่ระบบสำเร็จ (Verify Login Success)', async () => {
        await expect(page.locator("#flash")).toHaveText(/You logged into a secure area!/);
        await expect(page.getByRole('heading', { name: 'Secure Area', level: 2 })).toHaveText('Secure Area');
    });
    await test.step('ตรวจสอบการออกจากระบบสำเร็จ (Verify Logout Success)', async () => {
        await page.getByRole('link', { name: 'Logout' }).click();
        await expect(page.locator("#flash")).toHaveText(/You logged out of the secure area!/);
        await expect(page.getByRole('heading', { name: 'Login Page' })).toHaveText('Login Page');
    });
});




test("ทดสอบการเข้าสู่ระบบล้มเหลวรหัสผ่านไม่ถูกต้อง (Login Failed - Password incorrect)", async ({ page, context }) => {
    await test.step('เปิดหน้าเว็บและเข้าสู่ระบบด้วยข้อมูลผิด (Open Website and Login with Incorrect Credentials)', async () => {
        await page.goto('https://the-internet.herokuapp.com/login');
        await expect(page.getByRole('heading', { name: 'Login Page' })).toHaveText('Login Page');
        await page.locator("#username").fill('tomsmith');
        await page.locator("#password").fill('Password!');
        await page.getByRole('button', { name: 'Login' }).click();
    });
    await test.step('ตรวจสอบการเข้าสู่ระบบล้มเหลว (Verify Login Failure)', async () => {
        await expect(page.locator("#flash")).toContainText('Your password is invalid!');
    });
});





test("ทดสอบการเข้าสู่ระบบล้มเหลวชื่อผู้ใช้ไม่ถูกต้อง (Login Failed - Username incorrect)", async ({ page, context }) => {
    await test.step('เปิดหน้าเว็บและเข้าสู่ระบบด้วยข้อมูลผิด (Open Website and Login with Incorrect Credentials)', async () => {
        await page.goto('https://the-internet.herokuapp.com/login');
        await expect(page.getByRole('heading', { name: 'Login Page' })).toHaveText('Login Page');
        await page.locator("#username").fill('tomholland');
        await page.locator("#password").fill('SuperSecretPassword!');
        await page.getByRole('button', { name: 'Login' }).click();
    });
    await test.step('ตรวจสอบการเข้าสู่ระบบล้มเหลว (Verify Login Failure)', async () => {
        await expect(page.locator("#flash")).toContainText('Your username is invalid!');
    });
});
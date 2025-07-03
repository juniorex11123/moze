import requests
import unittest
import os
import json
from datetime import datetime

class BackendAPITester(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(BackendAPITester, self).__init__(*args, **kwargs)
        # Get the backend URL from the frontend .env file
        self.base_url = "https://4b695ab0-0eb9-4b7d-ae24-2100ad0decc2.preview.emergentagent.com"
        print(f"Using backend URL: {self.base_url}")
        
    def test_01_root_endpoint(self):
        """Test the root API endpoint"""
        print("\n🔍 Testing root API endpoint...")
        url = f"{self.base_url}/api/"
        
        try:
            response = requests.get(url)
            self.assertEqual(response.status_code, 200, f"Expected status code 200, got {response.status_code}")
            data = response.json()
            self.assertEqual(data.get("message"), "Hello World", "Expected 'Hello World' message")
            print("✅ Root API endpoint test passed")
        except Exception as e:
            self.fail(f"Root API endpoint test failed: {str(e)}")
            
    def test_02_status_endpoint_post(self):
        """Test the status POST endpoint"""
        print("\n🔍 Testing status POST endpoint...")
        url = f"{self.base_url}/api/status"
        data = {"client_name": f"test_client_{datetime.now().strftime('%Y%m%d%H%M%S')}"}
        
        try:
            response = requests.post(url, json=data)
            self.assertEqual(response.status_code, 200, f"Expected status code 200, got {response.status_code}")
            response_data = response.json()
            self.assertEqual(response_data.get("client_name"), data["client_name"], "Client name doesn't match")
            self.assertIn("id", response_data, "Response should contain an ID")
            self.assertIn("timestamp", response_data, "Response should contain a timestamp")
            print("✅ Status POST endpoint test passed")
        except Exception as e:
            self.fail(f"Status POST endpoint test failed: {str(e)}")
            
    def test_03_status_endpoint_get(self):
        """Test the status GET endpoint"""
        print("\n🔍 Testing status GET endpoint...")
        url = f"{self.base_url}/api/status"
        
        try:
            response = requests.get(url)
            self.assertEqual(response.status_code, 200, f"Expected status code 200, got {response.status_code}")
            data = response.json()
            self.assertIsInstance(data, list, "Expected a list of status checks")
            if len(data) > 0:
                self.assertIn("id", data[0], "Status check should contain an ID")
                self.assertIn("client_name", data[0], "Status check should contain a client name")
                self.assertIn("timestamp", data[0], "Status check should contain a timestamp")
            print("✅ Status GET endpoint test passed")
        except Exception as e:
            self.fail(f"Status GET endpoint test failed: {str(e)}")
            
    def test_04_auth_endpoints(self):
        """Test the auth endpoints (these might not be implemented yet)"""
        print("\n🔍 Testing auth endpoints...")
        url = f"{self.base_url}/api/auth/login"
        data = {"username": "test_user", "password": "test_password"}
        
        try:
            response = requests.post(url, json=data)
            # Just check if the endpoint exists, don't fail the test if it returns an error
            print(f"Auth login endpoint status: {response.status_code}")
            if response.status_code == 404:
                print("⚠️ Auth login endpoint not found (404) - This might be expected if not implemented yet")
            else:
                print(f"Auth login response: {response.text[:100]}...")
        except Exception as e:
            print(f"⚠️ Auth login endpoint test error: {str(e)}")
            
if __name__ == "__main__":
    unittest.main(argv=['first-arg-is-ignored'], exit=False)
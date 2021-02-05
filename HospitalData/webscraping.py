#secondenv

import requests
from bs4 import BeautifulSoup

URL = 'https://www.practo.com/search?results_type=doctor&q=%5B%7B%22word%22%3A%22Dentist%22%2C%22autocompleted%22%3Atrue%2C%22category%22%3A%22subspeciality%22%7D%5D&city=Vijayawada'
page = requests.get(URL) 
#print(page) 

doctor_data={'doctor_experience':'','doctor_specialization':''}

soup = BeautifulSoup(page.content, 'html.parser')
#print(soup.prettify())
results = soup.find(id='container')
#print(results.prettify())

doctor_elems = results.find_all('div', class_='listing-doctor-card')
for doc_elem in doctor_elems:
   # print(doc_elem, end='\n'*2)
    doctor_experience = doc_elem.find('div', class_='uv2-spacer--xs-top')
    doctor_specialization = doc_elem.find('h3', class_='u-d-inline')
    #doctor_profile_link = doc_elem.find('a', class_='info-section')

    #print(doctor_specialization)
    #print(doctor_experience)

    print(doctor_experience.text)
    print(doctor_specialization.text)
    #print(doctor_profile_link) 

    doctor_data['doctor_experience']=doctor_experience.text
    doctor_data['doctor_specialization']=doctor_specialization.text

    #print(doctor_data) 



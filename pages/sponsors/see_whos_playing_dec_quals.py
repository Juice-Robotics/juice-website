import requests
from bs4 import BeautifulSoup
import json
import time

page_url = 'https://www.norcalftc.org/norcal-ftc-team-list-new/'
headers = {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
}
rawpage = requests.get(page_url,headers=headers)
soup = BeautifulSoup(rawpage.content, 'html.parser')
rawNumbersContent = soup.body.find_all('td', class_='column-1')

teamNums = []
blacklist = ["4950", "6038", "7128", "7303", "7128", "7303", "7610", "12869", "13356", "14300", "16533", "20791", "21885", "23157", "23346"]

for element in rawNumbersContent:
    if (not any(element.text in s for s in blacklist)):
        teamNums.append(element.text)

# print(len(teamNums))

# for team in teamNums:
page_url = 'https://www.norcalftc.org/ftc-team-status/?ftcteam=16236'
headers = {
   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
}

rawData = {}

for team in zip(range(2), teamNums):
    rawpage = requests.get(page_url,headers=headers)
    soup = BeautifulSoup(rawpage.content, 'html.parser')
    rawTeamContent = soup.body.find_all('tr')[16].find_all('td')[1].text
    print(str(team) + ": " + str(rawTeamContent))
    rawData[str(team).split(", '")[1].replace("')", "")] = rawTeamContent
    time.sleep(10)


print(rawData)



# Write the JSON object to a file
with open("data.json", "w") as f:
  json.dump(rawData, f, indent=4)
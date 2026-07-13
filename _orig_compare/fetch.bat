@echo off
set UA=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36
set AH=Accept: text/html,application/xhtml+xml
set AL=Accept-Language: en-US,en;q=0.9
if not exist _orig_compare mkdir _orig_compare
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/" -o _orig_compare/home.html -w "home %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/about" -o _orig_compare/about.html -w "about %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/speaking" -o _orig_compare/speaking.html -w "speaking %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/blog" -o _orig_compare/blog.html -w "blog %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/courses" -o _orig_compare/courses.html -w "courses %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/contact" -o _orig_compare/contact.html -w "contact %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/experiences" -o _orig_compare/experiences.html -w "experiences %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/masterclass" -o _orig_compare/masterclass.html -w "masterclass %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/moonshot" -o _orig_compare/moonshot.html -w "moonshot %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/newsletter" -o _orig_compare/newsletter.html -w "newsletter %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/terms" -o _orig_compare/terms.html -w "terms %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/privacy-policy" -o _orig_compare/privacy-policy.html -w "privacy-policy %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/affiliate-disclosure" -o _orig_compare/affiliate-disclosure.html -w "affiliate-disclosure %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/awaken" -o _orig_compare/awaken.html -w "awaken %{http_code} %{size_download}\n"
curl.exe -s -L -A "%UA%" -H "%AH%" -H "%AL%" "https://ozanvarol.com/rocket-scientist" -o _orig_compare/rocket-scientist.html -w "rocket-scientist %{http_code} %{size_download}\n"
echo DONE
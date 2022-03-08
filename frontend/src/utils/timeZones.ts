export interface zone{
  value:number,
  label:string,
  location:string

}

export const timeZones:zone[] = [
    {
      value: -11,
      label: '(GMT-11:00) Pago Pago": "Pacific/Pago_Pago',
      location: "Pacific/Pago_Pago"
    },
    {
      value: -10,
      label: '(GMT-10:00) Hawaii Time": "Pacific/Honolulu',
      location: "Pacific/Honolulu"
    },
    {
      value: -8,
      label: '(GMT-08:00) Pacific Time": "America/Los_Angeles',
      location: "America/Los_Angeles"
    },
    {
      value: -7,
      label: '(GMT-07:00) Mountain Time - Arizona": "America/Phoenix',
      location: "America/Phoenix"
    },
    {
      value: -6,
      label: '(GMT-06:00) Central Time": "America/Chicago"',
      location: "America/Chicago"
    },
    {
      value: -5,
      label: '(GMT-05:00) Eastern Time": "America/New_York"',
      location: "America/New_York"
    },
    {
      value: -4,
      label: '(GMT-04:00) Atlantic Time - Halifax": "America/Halifax"',
      location: "America/Halifax"
    },
    {
      value: -3,
      label: '(GMT-03:00) Godthab": "America/Godthab"',
      location: "America/Godthab"
    },
    {
      value: -2,
      label: '(GMT-02:00) Sao Paulo": "America/Sao_Paulo"',
      location: "America/Sao_Paulo"
    },
    {
      value: -1,
      label: '(GMT-01:00) Cape Verde": "Atlantic/Cape_Verde"',
      location: "Atlantic/Cape_Verde"
    },
    {
      value: 0,
      label: '(GMT+00:00) London": "Europe/London"',
      location: "Europe/London"
    },
    {
      value: +1,
      label: '(GMT+01:00) Amsterdam": "Europe/Amsterdam"',
      location: "Europe/Amsterdam"
    },
    {
      value: +2,
      label: '(GMT+02:00) Kiev": "Europe/Kiev"',
      location: "Europe/Kiev"
    },
    {
      value: +3,
      label: '(GMT+03:00) Istanbul": "Europe/Istanbul"',
      location: "Europe/Istanbul"
    },
    {
      value: +4,
      label: '(GMT+04:00) Moscow+01 - Samara": "Europe/Samara"',
      location: "Europe/Samara"
    },
    {
      value: +5,
      label: '(GMT+05:00) Moscow+02 - Yekaterinburg": "Asia/Yekaterinburg"',
      location: "Asia/Yekaterinburg"
    },
    {
      value: +6,
      label: '(GMT+06:00) Dhaka": "Asia/Dhaka"',
      location: "Asia/Dhaka"
    },
    {
      value: +7,
      label: '(GMT+07:00) Jakarta": "Asia/Jakarta"',
      location: "Asia/Jakarta"
    },
    {
      value: +8,
      label: '(GMT+08:00) Hong Kong": "Asia/Hong_Kong"',
      location: "Asia/Hong_Kong"
    },
    {
      value: +9,
      label: '(GMT+09:00) Seoul": "Asia/Seoul"',
      location: "Asia/Seoul"
    },
    {
      value: +10,
      label: '(GMT+10:00) Eastern Time - Brisbane": "Australia/Brisbane"',
      location: "Australia/Brisbane"
    },
    {
      value: +11,
      label: '(GMT+11:00) Eastern Time - Hobart": "Australia/Hobart"',
      location: "Australia/Hobart"
    },
    {
      value: +12,
      label: '(GMT+12:00) Majuro": "Pacific/Majuro"',
      location: "Pacific/Majuro"
    },
    {
      value: +13,
      label: '(GMT+13:00) Auckland": "Pacific/Auckland"',
      location: "Pacific/Auckland"
    },
    {
      value: +14,
      label: '(GMT+14:00) Apia": "Pacific/Apia"',
      location: "Pacific/Apia"
    }
  ];

export function zoneConvertedTime(time:string, zone:zone){
  
  let hour= parseFloat(time.slice(0,1))
  hour +=zone.value
  if(hour <0) hour +=24
  const remaingTimevalues= time.slice(2,time.length)

  return hour+remaingTimevalues
}
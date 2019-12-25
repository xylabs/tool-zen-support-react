
import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'

export const fieldsByName = {
Subject: {
      id: 360023192453,
      name: "Subject",
      title: "Subject",
      description: "Please give a brief 5-7 word description of the request",
      options: {},
      TextField: ({ values, setCustomField }: any) => {
    return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
    Please give a brief 5-7 word description of the request
  </Typography><TextField 
      label={"Subject"}
      value={values.custom_fields && values.custom_fields[360023192453] || ''} 
      onChange={(ev: any) => setCustomField(360023192453, ev.target.value)} 
      fullWidth
      required
      
      /></div>
  }
},

Description: {
      id: 360023192473,
      name: "Description",
      title: "Description",
      description: "Please enter the details of your request. If you have multiple requests, please enumerate them with a \"1. 2. 3.\" to separate each question.",
      options: {},
      TextField: ({ values, setCustomField }: any) => {
    return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
    Please enter the details of your request. If you have multiple requests, please enumerate them with a "1. 2. 3." to separate each question.
  </Typography><TextField 
      label={"Description"}
      value={values.custom_fields && values.custom_fields[360023192473] || ''} 
      onChange={(ev: any) => setCustomField(360023192473, ev.target.value)} 
      fullWidth
      required
      multiline
		rows={5}
      /></div>
  }
},

PrimaryTopic: {
      id: 360023229873,
      name: "PrimaryTopic",
      title: "Primary Topic",
      description: "",
      options: {
        "account_assistance": "Account Assistance","bug_or_error": "Bug or Error","bulk_purchase": "Bulk Purchase","coin_app": "COIN App","coin_app_subscription": "COIN App Subscription","coin_branded_merchandise": "COIN Branded Merchandise","geodrops": "Geodrops","other_app_feature": "Other App Feature","sentinel_sharing": "Sentinel Sharing","set_up_assistance": "Set Up Assistance","withdrawals": "Withdrawals","geoclaims": "Geoclaims","hodl_rewards": "HODL Rewards","referral_rewards": "Referral Rewards","coin_master_plan": "COIN Master Plan"
      },
      TextField: ({ values, setCustomField }: any) => {
    return <div><TextField 
      label={"Primary Topic"}
      value={values.custom_fields && values.custom_fields[360023229873] || ''} 
      onChange={(ev: any) => setCustomField(360023229873, ev.target.value)} 
      fullWidth
      required
      
      select>
      <MenuItem value={"account_assistance"}>Account Assistance</MenuItem>

      <MenuItem value={"bug_or_error"}>Bug or Error</MenuItem>

      <MenuItem value={"bulk_purchase"}>Bulk Purchase</MenuItem>

      <MenuItem value={"coin_app"}>COIN App</MenuItem>

      <MenuItem value={"coin_app_subscription"}>COIN App Subscription</MenuItem>

      <MenuItem value={"coin_branded_merchandise"}>COIN Branded Merchandise</MenuItem>

      <MenuItem value={"geodrops"}>Geodrops</MenuItem>

      <MenuItem value={"other_app_feature"}>Other App Feature</MenuItem>

      <MenuItem value={"sentinel_sharing"}>Sentinel Sharing</MenuItem>

      <MenuItem value={"set_up_assistance"}>Set Up Assistance</MenuItem>

      <MenuItem value={"withdrawals"}>Withdrawals</MenuItem>

      <MenuItem value={"geoclaims"}>Geoclaims</MenuItem>

      <MenuItem value={"hodl_rewards"}>HODL Rewards</MenuItem>

      <MenuItem value={"referral_rewards"}>Referral Rewards</MenuItem>

      <MenuItem value={"coin_master_plan"}>COIN Master Plan</MenuItem>
  </TextField></div>
  }
},

SecondaryTopic: {
      id: 360023229993,
      name: "SecondaryTopic",
      title: "Secondary Topic",
      description: "Please select the additional detail that applies to your inquiry",
      options: {
        "cancel_coin_subscription": "Cancel COIN Subscription","change_account_information": "Change Account Information","change_payment_method": "Change Payment Method","checkout_issues": "Checkout Issues","coin_app_123": "COIN App 123","coin_subscription_billing_issue": "COIN Subscription Billing Issue","cryptowallet_question": "Cryptowallet Question","cryptowallet_set_up": "Cryptowallet Set Up","exchange": "Exchange","general_question": "General Question","how_or_where_to_download_app": "How or where to download app","how_to_buy_coin_subscription": "How to Buy COIN Subscription","how_to_buy_sentinelx": "How to Buy SentinelX","how_to_make_money_with_coin": "How to make money with COIN","how_to_sell_xyo_tokens": "How to sell XYO Tokens","how_to_withdraw": "How to Withdraw","missing_assets": "Missing Assets","payment_types_accepted": "Payment Types Accepted","pending_withdrawal": "Pending Withdrawal","questions_about_app_or_feature": "Questions about App or Feature","refunds_or_returns": "Refunds or Returns","sentinel_sharing_error": "Sentinel Sharing Error","sentinel_sharing_instructions": "Sentinel Sharing Instructions","sentinel_sharing_rewards": "Sentinel Sharing Rewards","troubleshooting": "Troubleshooting","upgrade_or_downgrade_coin_subscription": "Upgrade or Downgrade COIN Subscription","withdrew_to_wrong_wallet": "Withdrew to Wrong Wallet"
      },
      TextField: ({ values, setCustomField }: any) => {
    return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
    Please select the additional detail that applies to your inquiry
  </Typography><TextField 
      label={"Secondary Topic"}
      value={values.custom_fields && values.custom_fields[360023229993] || ''} 
      onChange={(ev: any) => setCustomField(360023229993, ev.target.value)} 
      fullWidth
      required
      
      select>
      <MenuItem value={"cancel_coin_subscription"}>Cancel COIN Subscription</MenuItem>

      <MenuItem value={"change_account_information"}>Change Account Information</MenuItem>

      <MenuItem value={"change_payment_method"}>Change Payment Method</MenuItem>

      <MenuItem value={"checkout_issues"}>Checkout Issues</MenuItem>

      <MenuItem value={"coin_app_123"}>COIN App 123</MenuItem>

      <MenuItem value={"coin_subscription_billing_issue"}>COIN Subscription Billing Issue</MenuItem>

      <MenuItem value={"cryptowallet_question"}>Cryptowallet Question</MenuItem>

      <MenuItem value={"cryptowallet_set_up"}>Cryptowallet Set Up</MenuItem>

      <MenuItem value={"exchange"}>Exchange</MenuItem>

      <MenuItem value={"general_question"}>General Question</MenuItem>

      <MenuItem value={"how_or_where_to_download_app"}>How or where to download app</MenuItem>

      <MenuItem value={"how_to_buy_coin_subscription"}>How to Buy COIN Subscription</MenuItem>

      <MenuItem value={"how_to_buy_sentinelx"}>How to Buy SentinelX</MenuItem>

      <MenuItem value={"how_to_make_money_with_coin"}>How to make money with COIN</MenuItem>

      <MenuItem value={"how_to_sell_xyo_tokens"}>How to sell XYO Tokens</MenuItem>

      <MenuItem value={"how_to_withdraw"}>How to Withdraw</MenuItem>

      <MenuItem value={"missing_assets"}>Missing Assets</MenuItem>

      <MenuItem value={"payment_types_accepted"}>Payment Types Accepted</MenuItem>

      <MenuItem value={"pending_withdrawal"}>Pending Withdrawal</MenuItem>

      <MenuItem value={"questions_about_app_or_feature"}>Questions about App or Feature</MenuItem>

      <MenuItem value={"refunds_or_returns"}>Refunds or Returns</MenuItem>

      <MenuItem value={"sentinel_sharing_error"}>Sentinel Sharing Error</MenuItem>

      <MenuItem value={"sentinel_sharing_instructions"}>Sentinel Sharing Instructions</MenuItem>

      <MenuItem value={"sentinel_sharing_rewards"}>Sentinel Sharing Rewards</MenuItem>

      <MenuItem value={"troubleshooting"}>Troubleshooting</MenuItem>

      <MenuItem value={"upgrade_or_downgrade_coin_subscription"}>Upgrade or Downgrade COIN Subscription</MenuItem>

      <MenuItem value={"withdrew_to_wrong_wallet"}>Withdrew to Wrong Wallet</MenuItem>
  </TextField></div>
  }
},

Status: {
      id: 360023192493,
      name: "Status",
      title: "Status",
      description: "Request status",
      options: {},
      TextField: ({ values, setCustomField }: any) => {
    return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
    Request status
  </Typography><TextField 
      label={"Status"}
      value={values.custom_fields && values.custom_fields[360023192493] || ''} 
      onChange={(ev: any) => setCustomField(360023192493, ev.target.value)} 
      fullWidth
      required
      
      /></div>
  }
},

Platform: {
      id: 360023202994,
      name: "Platform",
      title: "Platform",
      description: "Are you using an iOS device (iPhone, iPad, iPod) or an Android smartphone or tablet?",
      options: {
        "ios": "iOS","android": "Android","not_applicable": "Not Applicable"
      },
      TextField: ({ values, setCustomField }: any) => {
    return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
    Are you using an iOS device (iPhone, iPad, iPod) or an Android smartphone or tablet?
  </Typography><TextField 
      label={"Platform"}
      value={values.custom_fields && values.custom_fields[360023202994] || ''} 
      onChange={(ev: any) => setCustomField(360023202994, ev.target.value)} 
      fullWidth
      required
      
      select>
      <MenuItem value={"ios"}>iOS</MenuItem>

      <MenuItem value={"android"}>Android</MenuItem>

      <MenuItem value={"not_applicable"}>Not Applicable</MenuItem>
  </TextField></div>
  }
},

Type: {
      id: 360023192513,
      name: "Type",
      title: "Type",
      description: "Request type",
      options: {},
      TextField: ({ values, setCustomField }: any) => {
    return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
    Request type
  </Typography><TextField 
      label={"Type"}
      value={values.custom_fields && values.custom_fields[360023192513] || ''} 
      onChange={(ev: any) => setCustomField(360023192513, ev.target.value)} 
      fullWidth
      required
      
      /></div>
  }
},

Priority: {
      id: 360023192533,
      name: "Priority",
      title: "Priority",
      description: "Request priority",
      options: {},
      TextField: ({ values, setCustomField }: any) => {
    return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
    Request priority
  </Typography><TextField 
      label={"Priority"}
      value={values.custom_fields && values.custom_fields[360023192533] || ''} 
      onChange={(ev: any) => setCustomField(360023192533, ev.target.value)} 
      fullWidth
      required
      
      /></div>
  }
},

Group: {
      id: 360023192553,
      name: "Group",
      title: "Group",
      description: "Request group",
      options: {},
      TextField: ({ values, setCustomField }: any) => {
    return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
    Request group
  </Typography><TextField 
      label={"Group"}
      value={values.custom_fields && values.custom_fields[360023192553] || ''} 
      onChange={(ev: any) => setCustomField(360023192553, ev.target.value)} 
      fullWidth
      required
      
      /></div>
  }
},

KPITags: {
      id: 360023203614,
      name: "KPITags",
      title: "KPI Tags",
      description: "",
      options: {
        "article_answered": "article answered","confused_customer": "confused customer","customer_helped_self": "customer helped self","declined_transaction": "declined transaction","duplicate_charge": "duplicate charge","fhr": "fhr","geoclaim_reversal": "geoclaim reversal","impatient_customer": "impatient customer","known_bug": "known bug","marketing_inquiry": "marketing inquiry","never_left_warehouse": "never left warehouse","partnership_inquiry": "partnership inquiry","refund": "refund","subscription_activation_issue": "subscription activation issue","redirected_to_xy_team": "redirected to XY Team"
      },
      TextField: ({ values, setCustomField }: any) => {
    return <div><TextField 
      label={"KPI Tags"}
      value={values.custom_fields && values.custom_fields[360023203614] || ''} 
      onChange={(ev: any) => setCustomField(360023203614, ev.target.value)} 
      fullWidth
      required
      
      select>
      <MenuItem value={"article_answered"}>article answered</MenuItem>

      <MenuItem value={"confused_customer"}>confused customer</MenuItem>

      <MenuItem value={"customer_helped_self"}>customer helped self</MenuItem>

      <MenuItem value={"declined_transaction"}>declined transaction</MenuItem>

      <MenuItem value={"duplicate_charge"}>duplicate charge</MenuItem>

      <MenuItem value={"fhr"}>fhr</MenuItem>

      <MenuItem value={"geoclaim_reversal"}>geoclaim reversal</MenuItem>

      <MenuItem value={"impatient_customer"}>impatient customer</MenuItem>

      <MenuItem value={"known_bug"}>known bug</MenuItem>

      <MenuItem value={"marketing_inquiry"}>marketing inquiry</MenuItem>

      <MenuItem value={"never_left_warehouse"}>never left warehouse</MenuItem>

      <MenuItem value={"partnership_inquiry"}>partnership inquiry</MenuItem>

      <MenuItem value={"refund"}>refund</MenuItem>

      <MenuItem value={"subscription_activation_issue"}>subscription activation issue</MenuItem>

      <MenuItem value={"redirected_to_xy_team"}>redirected to XY Team</MenuItem>
  </TextField></div>
  }
},

Assignee: {
      id: 360023192573,
      name: "Assignee",
      title: "Assignee",
      description: "Agent assigned to your request",
      options: {},
      TextField: ({ values, setCustomField }: any) => {
    return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
    Agent assigned to your request
  </Typography><TextField 
      label={"Assignee"}
      value={values.custom_fields && values.custom_fields[360023192573] || ''} 
      onChange={(ev: any) => setCustomField(360023192573, ev.target.value)} 
      fullWidth
      required
      
      /></div>
  }
},

ReturnExchangeReason: {
      id: 360026500694,
      name: "ReturnExchangeReason",
      title: "Return/Exchange Reason",
      description: "",
      options: {
        "1._misunderstanding_of_product": "1. Misunderstanding of Product","2._doesn_t_turn_on": "2. Doesn't Turn On","3._beeping_device": "3. Beeping Device","4._connectivity_issues": "4. Connectivity Issues","5._other": "5. Stopped Working","6._other": "6. Other"
      },
      TextField: ({ values, setCustomField }: any) => {
    return <div><TextField 
      label={"Return/Exchange Reason"}
      value={values.custom_fields && values.custom_fields[360026500694] || ''} 
      onChange={(ev: any) => setCustomField(360026500694, ev.target.value)} 
      fullWidth
      required
      
      select>
      <MenuItem value={"1._misunderstanding_of_product"}>1. Misunderstanding of Product</MenuItem>

      <MenuItem value={"2._doesn_t_turn_on"}>2. Doesn't Turn On</MenuItem>

      <MenuItem value={"3._beeping_device"}>3. Beeping Device</MenuItem>

      <MenuItem value={"4._connectivity_issues"}>4. Connectivity Issues</MenuItem>

      <MenuItem value={"5._other"}>5. Stopped Working</MenuItem>

      <MenuItem value={"6._other"}>6. Other</MenuItem>
  </TextField></div>
  }
},

iOSorAndroid: {
      id: 360023202734,
      name: "iOSorAndroid",
      title: "iOS or Android?",
      description: "Are you using iOS (Apple) or Android with the COIN App?",
      options: {
        "ios": "iOS","android": "Android"
      },
      TextField: ({ values, setCustomField }: any) => {
    return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
    Are you using iOS (Apple) or Android with the COIN App?
  </Typography><TextField 
      label={"iOS or Android?"}
      value={values.custom_fields && values.custom_fields[360023202734] || ''} 
      onChange={(ev: any) => setCustomField(360023202734, ev.target.value)} 
      fullWidth
      required
      
      select>
      <MenuItem value={"ios"}>iOS</MenuItem>

      <MenuItem value={"android"}>Android</MenuItem>
  </TextField></div>
  }
},
}

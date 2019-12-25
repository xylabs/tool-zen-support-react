
import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

export const SubjectField = ({ values, setCustomField }: any) => {
  return <TextField 
    label={"Subject"}
    helperText={"Please give a brief 5-7 word description of the request"}
    value={values.custom_fields && values.custom_fields[360023192453] || ''} 
    onChange={(ev: any) => setCustomField(360023192453, ev.target.value)} 
    fullWidth
    required
    
    />
}

export const DescriptionField = ({ values, setCustomField }: any) => {
  return <TextField 
    label={"Description"}
    helperText={"Please enter the details of your request. If you have multiple requests, please enumerate them with a \"1. 2. 3.\" to separate each question."}
    value={values.custom_fields && values.custom_fields[360023192473] || ''} 
    onChange={(ev: any) => setCustomField(360023192473, ev.target.value)} 
    fullWidth
    required
    multiline
		rows={5}
    />
}

export const PrimaryTopicField = ({ values, setCustomField }: any) => {
  return <TextField 
    label={"Primary Topic"}
    helperText={""}
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
</TextField>
}

export const SecondaryTopicField = ({ values, setCustomField }: any) => {
  return <TextField 
    label={"Secondary Topic"}
    helperText={"Please select the additional detail that applies to your inquiry"}
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
</TextField>
}

export const StatusField = ({ values, setCustomField }: any) => {
  return <TextField 
    label={"Status"}
    helperText={"Request status"}
    value={values.custom_fields && values.custom_fields[360023192493] || ''} 
    onChange={(ev: any) => setCustomField(360023192493, ev.target.value)} 
    fullWidth
    required
    
    />
}

export const PlatformField = ({ values, setCustomField }: any) => {
  return <TextField 
    label={"Platform"}
    helperText={"Are you using an iOS device (iPhone, iPad, iPod) or an Android smartphone or tablet?"}
    value={values.custom_fields && values.custom_fields[360023202994] || ''} 
    onChange={(ev: any) => setCustomField(360023202994, ev.target.value)} 
    fullWidth
    required
    
    select>
    <MenuItem value={"ios"}>iOS</MenuItem>

    <MenuItem value={"android"}>Android</MenuItem>

    <MenuItem value={"not_applicable"}>Not Applicable</MenuItem>
</TextField>
}

export const TypeField = ({ values, setCustomField }: any) => {
  return <TextField 
    label={"Type"}
    helperText={"Request type"}
    value={values.custom_fields && values.custom_fields[360023192513] || ''} 
    onChange={(ev: any) => setCustomField(360023192513, ev.target.value)} 
    fullWidth
    required
    
    />
}

export const PriorityField = ({ values, setCustomField }: any) => {
  return <TextField 
    label={"Priority"}
    helperText={"Request priority"}
    value={values.custom_fields && values.custom_fields[360023192533] || ''} 
    onChange={(ev: any) => setCustomField(360023192533, ev.target.value)} 
    fullWidth
    required
    
    />
}

export const GroupField = ({ values, setCustomField }: any) => {
  return <TextField 
    label={"Group"}
    helperText={"Request group"}
    value={values.custom_fields && values.custom_fields[360023192553] || ''} 
    onChange={(ev: any) => setCustomField(360023192553, ev.target.value)} 
    fullWidth
    required
    
    />
}

export const KPITagsField = ({ values, setCustomField }: any) => {
  return <TextField 
    label={"KPI Tags"}
    helperText={""}
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
</TextField>
}

export const AssigneeField = ({ values, setCustomField }: any) => {
  return <TextField 
    label={"Assignee"}
    helperText={"Agent assigned to your request"}
    value={values.custom_fields && values.custom_fields[360023192573] || ''} 
    onChange={(ev: any) => setCustomField(360023192573, ev.target.value)} 
    fullWidth
    required
    
    />
}

export const ReturnExchangeReasonField = ({ values, setCustomField }: any) => {
  return <TextField 
    label={"Return/Exchange Reason"}
    helperText={""}
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
</TextField>
}

export const iOSorAndroidField = ({ values, setCustomField }: any) => {
  return <TextField 
    label={"iOS or Android?"}
    helperText={"Are you using iOS (Apple) or Android with the COIN App?"}
    value={values.custom_fields && values.custom_fields[360023202734] || ''} 
    onChange={(ev: any) => setCustomField(360023202734, ev.target.value)} 
    fullWidth
    required
    
    select>
    <MenuItem value={"ios"}>iOS</MenuItem>

    <MenuItem value={"android"}>Android</MenuItem>
</TextField>
}

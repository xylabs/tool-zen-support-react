
import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Tooltip from '@material-ui/core/Tooltip'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import Box from '@material-ui/core/Box'
import BugReportIcon from '@material-ui/icons/BugReport'
export { default as BugReportIcon } from '@material-ui/icons/BugReport'
import AndroidIcon from '@material-ui/icons/Android'
export { default as AndroidIcon } from '@material-ui/icons/Android'

export const Subject = {
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
}

export const Description = {
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
}

export const PrimaryTopic = {
      id: 360023229873,
      name: "PrimaryTopic",
      title: "Primary Topic",
      description: "",
      options: {
        "account_assistance": "Account Assistance","bug_or_error": "Bug or Error","bulk_purchase": "Bulk Purchase","coin_app": "COIN App","coin_app_subscription": "COIN App Subscription","coin_branded_merchandise": "COIN Branded Merchandise","geodrops": "Geodrops","other_app_feature": "Other App Feature","sentinel_sharing": "Sentinel Sharing","set_up_assistance": "Set Up Assistance","withdrawals": "Withdrawals","geoclaims": "Geoclaims","hodl_rewards": "HODL Rewards","referral_rewards": "Referral Rewards","coin_master_plan": "COIN Master Plan"
      },
      Select: ({ values, selectCustomField }: any) => {
        return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
        Primary Topic
      </Typography><Grid container>
      
          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Account Assistance">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "account_assistance" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "account_assistance")}>
              <i className="fas fa-user-circle"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Bug or Error">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "bug_or_error" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "bug_or_error")}>
              <BugReportIcon />
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Bulk Purchase">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "bulk_purchase" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "bulk_purchase")}>
              <i className="fas fa-list-ol"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="COIN App">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "coin_app" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "coin_app")}>
              <i className="fab fa-shirtsinbulk"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="COIN App Subscription">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "coin_app_subscription" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "coin_app_subscription")}>
              <i className="fas fa-money-check-alt"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="COIN Branded Merchandise">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "coin_branded_merchandise" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "coin_branded_merchandise")}>
              <i className="fas fa-shopping-bag"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Geodrops">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "geodrops" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "geodrops")}>
              <i className="fas fa-parachute-box"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Other App Feature">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "other_app_feature" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "other_app_feature")}>
              <i className="fas fa-cogs"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Sentinel Sharing">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "sentinel_sharing" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "sentinel_sharing")}>
              <i className="fas fa-user-plus"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Set Up Assistance">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "set_up_assistance" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "set_up_assistance")}>
              <i className="fas fa-user-circle"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Withdrawals">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "withdrawals" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "withdrawals")}>
              <i className="fas fa-wallet"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Geoclaims">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "geoclaims" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "geoclaims")}>
              <i className="fas fa-map-marked-alt"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="HODL Rewards">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "hodl_rewards" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "hodl_rewards")}>
              <i className="fas fa-coins"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Referral Rewards">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "referral_rewards" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "referral_rewards")}>
              <i className="fas fa-users"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="COIN Master Plan">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229873] === "coin_master_plan" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229873, "coin_master_plan")}>
              <i className="fas fa-crown"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>
      </Grid></div>
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
}

export const SecondaryTopic = {
      id: 360023229993,
      name: "SecondaryTopic",
      title: "Secondary Topic",
      description: "Please select the additional detail that applies to your inquiry",
      options: {
        "cancel_coin_subscription": "Cancel COIN Subscription","change_account_information": "Change Account Information","change_payment_method": "Change Payment Method","checkout_issues": "Checkout Issues","coin_app_123": "COIN App 123","coin_subscription_billing_issue": "COIN Subscription Billing Issue","cryptowallet_question": "Cryptowallet Question","cryptowallet_set_up": "Cryptowallet Set Up","exchange": "Exchange","general_question": "General Question","how_or_where_to_download_app": "How or where to download app","how_to_buy_coin_subscription": "How to Buy COIN Subscription","how_to_buy_sentinelx": "How to Buy SentinelX","how_to_make_money_with_coin": "How to make money with COIN","how_to_sell_xyo_tokens": "How to sell XYO Tokens","how_to_withdraw": "How to Withdraw","missing_assets": "Missing Assets","payment_types_accepted": "Payment Types Accepted","pending_withdrawal": "Pending Withdrawal","questions_about_app_or_feature": "Questions about App or Feature","refunds_or_returns": "Refunds or Returns","sentinel_sharing_error": "Sentinel Sharing Error","sentinel_sharing_instructions": "Sentinel Sharing Instructions","sentinel_sharing_rewards": "Sentinel Sharing Rewards","troubleshooting": "Troubleshooting","upgrade_or_downgrade_coin_subscription": "Upgrade or Downgrade COIN Subscription","withdrew_to_wrong_wallet": "Withdrew to Wrong Wallet"
      },
      Select: ({ values, selectCustomField }: any) => {
        return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
        Please select the additional detail that applies to your inquiry
      </Typography><Grid container>
      
          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Cancel COIN Subscription">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "cancel_coin_subscription" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "cancel_coin_subscription")}>
              <i className="fas fa-times"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Change Account Information">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "change_account_information" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "change_account_information")}>
              <i className="fas fa-user-circle"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Change Payment Method">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "change_payment_method" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "change_payment_method")}>
              <i className="fas fa-credit-card"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Checkout Issues">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "checkout_issues" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "checkout_issues")}>
              <i className="fas fa-cash-register"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="COIN App 123">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "coin_app_123" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "coin_app_123")}>
              C
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="COIN Subscription Billing Issue">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "coin_subscription_billing_issue" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "coin_subscription_billing_issue")}>
              C
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Cryptowallet Question">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "cryptowallet_question" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "cryptowallet_question")}>
              C
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Cryptowallet Set Up">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "cryptowallet_set_up" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "cryptowallet_set_up")}>
              C
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Exchange">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "exchange" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "exchange")}>
              E
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="General Question">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "general_question" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "general_question")}>
              G
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="How or where to download app">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "how_or_where_to_download_app" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "how_or_where_to_download_app")}>
              H
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="How to Buy COIN Subscription">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "how_to_buy_coin_subscription" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "how_to_buy_coin_subscription")}>
              H
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="How to Buy SentinelX">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "how_to_buy_sentinelx" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "how_to_buy_sentinelx")}>
              H
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="How to make money with COIN">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "how_to_make_money_with_coin" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "how_to_make_money_with_coin")}>
              H
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="How to sell XYO Tokens">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "how_to_sell_xyo_tokens" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "how_to_sell_xyo_tokens")}>
              H
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="How to Withdraw">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "how_to_withdraw" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "how_to_withdraw")}>
              H
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Missing Assets">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "missing_assets" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "missing_assets")}>
              M
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Payment Types Accepted">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "payment_types_accepted" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "payment_types_accepted")}>
              P
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Pending Withdrawal">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "pending_withdrawal" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "pending_withdrawal")}>
              P
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Questions about App or Feature">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "questions_about_app_or_feature" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "questions_about_app_or_feature")}>
              Q
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Refunds or Returns">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "refunds_or_returns" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "refunds_or_returns")}>
              R
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Sentinel Sharing Error">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "sentinel_sharing_error" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "sentinel_sharing_error")}>
              S
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Sentinel Sharing Instructions">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "sentinel_sharing_instructions" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "sentinel_sharing_instructions")}>
              S
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Sentinel Sharing Rewards">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "sentinel_sharing_rewards" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "sentinel_sharing_rewards")}>
              S
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Troubleshooting">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "troubleshooting" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "troubleshooting")}>
              T
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Upgrade or Downgrade COIN Subscription">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "upgrade_or_downgrade_coin_subscription" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "upgrade_or_downgrade_coin_subscription")}>
              U
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Withdrew to Wrong Wallet">
            <Fab
              style={values.custom_fields && values.custom_fields[360023229993] === "withdrew_to_wrong_wallet" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023229993, "withdrew_to_wrong_wallet")}>
              W
            </Fab>
          </Tooltip>
          </Box>
          </Grid>
      </Grid></div>
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
}

export const Status = {
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
}

export const Platform = {
      id: 360023202994,
      name: "Platform",
      title: "Platform",
      description: "Are you using an iOS device (iPhone, iPad, iPod) or an Android smartphone or tablet?",
      options: {
        "ios": "iOS","android": "Android","not_applicable": "Not Applicable"
      },
      Select: ({ values, selectCustomField }: any) => {
        return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
        Are you using an iOS device (iPhone, iPad, iPod) or an Android smartphone or tablet?
      </Typography><Grid container>
      
          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="iOS">
            <Fab
              style={values.custom_fields && values.custom_fields[360023202994] === "ios" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023202994, "ios")}>
              <i className="fab fa-apple"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Android">
            <Fab
              style={values.custom_fields && values.custom_fields[360023202994] === "android" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023202994, "android")}>
              <AndroidIcon />
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Not Applicable">
            <Fab
              style={values.custom_fields && values.custom_fields[360023202994] === "not_applicable" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023202994, "not_applicable")}>
              <i className="fas fa-times"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>
      </Grid></div>
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
}

export const Type = {
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
}

export const Priority = {
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
}

export const Group = {
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
}

export const KPITags = {
      id: 360023203614,
      name: "KPITags",
      title: "KPI Tags",
      description: "",
      options: {
        "article_answered": "article answered","confused_customer": "confused customer","customer_helped_self": "customer helped self","declined_transaction": "declined transaction","duplicate_charge": "duplicate charge","fhr": "fhr","geoclaim_reversal": "geoclaim reversal","impatient_customer": "impatient customer","known_bug": "known bug","marketing_inquiry": "marketing inquiry","never_left_warehouse": "never left warehouse","partnership_inquiry": "partnership inquiry","refund": "refund","subscription_activation_issue": "subscription activation issue","redirected_to_xy_team": "redirected to XY Team"
      },
      Select: ({ values, selectCustomField }: any) => {
        return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
        KPI Tags
      </Typography><Grid container>
      
          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="article answered">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "article_answered" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "article_answered")}>
              A
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="confused customer">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "confused_customer" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "confused_customer")}>
              C
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="customer helped self">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "customer_helped_self" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "customer_helped_self")}>
              C
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="declined transaction">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "declined_transaction" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "declined_transaction")}>
              D
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="duplicate charge">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "duplicate_charge" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "duplicate_charge")}>
              D
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="fhr">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "fhr" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "fhr")}>
              F
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="geoclaim reversal">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "geoclaim_reversal" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "geoclaim_reversal")}>
              G
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="impatient customer">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "impatient_customer" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "impatient_customer")}>
              I
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="known bug">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "known_bug" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "known_bug")}>
              K
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="marketing inquiry">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "marketing_inquiry" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "marketing_inquiry")}>
              M
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="never left warehouse">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "never_left_warehouse" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "never_left_warehouse")}>
              N
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="partnership inquiry">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "partnership_inquiry" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "partnership_inquiry")}>
              P
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="refund">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "refund" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "refund")}>
              R
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="subscription activation issue">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "subscription_activation_issue" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "subscription_activation_issue")}>
              S
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="redirected to XY Team">
            <Fab
              style={values.custom_fields && values.custom_fields[360023203614] === "redirected_to_xy_team" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023203614, "redirected_to_xy_team")}>
              R
            </Fab>
          </Tooltip>
          </Box>
          </Grid>
      </Grid></div>
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
}

export const Assignee = {
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
}

export const ReturnExchangeReason = {
      id: 360026500694,
      name: "ReturnExchangeReason",
      title: "Return/Exchange Reason",
      description: "",
      options: {
        "1._misunderstanding_of_product": "1. Misunderstanding of Product","2._doesn_t_turn_on": "2. Doesn't Turn On","3._beeping_device": "3. Beeping Device","4._connectivity_issues": "4. Connectivity Issues","5._other": "5. Stopped Working","6._other": "6. Other"
      },
      Select: ({ values, selectCustomField }: any) => {
        return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
        Return/Exchange Reason
      </Typography><Grid container>
      
          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="1. Misunderstanding of Product">
            <Fab
              style={values.custom_fields && values.custom_fields[360026500694] === "1._misunderstanding_of_product" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360026500694, "1._misunderstanding_of_product")}>
              1
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="2. Doesn't Turn On">
            <Fab
              style={values.custom_fields && values.custom_fields[360026500694] === "2._doesn_t_turn_on" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360026500694, "2._doesn_t_turn_on")}>
              2
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="3. Beeping Device">
            <Fab
              style={values.custom_fields && values.custom_fields[360026500694] === "3._beeping_device" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360026500694, "3._beeping_device")}>
              3
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="4. Connectivity Issues">
            <Fab
              style={values.custom_fields && values.custom_fields[360026500694] === "4._connectivity_issues" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360026500694, "4._connectivity_issues")}>
              4
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="5. Stopped Working">
            <Fab
              style={values.custom_fields && values.custom_fields[360026500694] === "5._other" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360026500694, "5._other")}>
              5
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="6. Other">
            <Fab
              style={values.custom_fields && values.custom_fields[360026500694] === "6._other" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360026500694, "6._other")}>
              6
            </Fab>
          </Tooltip>
          </Box>
          </Grid>
      </Grid></div>
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
}

export const iOSorAndroid = {
      id: 360023202734,
      name: "iOSorAndroid",
      title: "iOS or Android?",
      description: "Are you using iOS (Apple) or Android with the COIN App?",
      options: {
        "ios": "iOS","android": "Android"
      },
      Select: ({ values, selectCustomField }: any) => {
        return <div><Typography variant="h5" style={{ marginBottom: '1rem' }}>
        Are you using iOS (Apple) or Android with the COIN App?
      </Typography><Grid container>
      
          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="iOS">
            <Fab
              style={values.custom_fields && values.custom_fields[360023202734] === "ios" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023202734, "ios")}>
              <i className="fab fa-apple"></i>
            </Fab>
          </Tooltip>
          </Box>
          </Grid>

          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="Android">
            <Fab
              style={values.custom_fields && values.custom_fields[360023202734] === "android" ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(360023202734, "android")}>
              <AndroidIcon />
            </Fab>
          </Tooltip>
          </Box>
          </Grid>
      </Grid></div>
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
}

export const fieldsByName = {
Subject,
Description,
PrimaryTopic,
SecondaryTopic,
Status,
Platform,
Type,
Priority,
Group,
KPITags,
Assignee,
ReturnExchangeReason,
iOSorAndroid
}

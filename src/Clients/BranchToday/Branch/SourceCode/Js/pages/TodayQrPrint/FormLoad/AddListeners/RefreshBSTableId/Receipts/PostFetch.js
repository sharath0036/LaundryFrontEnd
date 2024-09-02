import urlJson from '../../../../url.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalBranchName = localStorage.getItem('BranchName');
    // let jVarLocalFetchUrl = `/${urlJson.StartRoute}/${jVarLocalBranchName}/Show/DataOnly`;
    let jVarLocalFetchUrl = `/Custom/Clients/Laundry/Qrcodes/Generate/TransOrdersKakinada/`
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };


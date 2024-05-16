import React from 'react';

export default function Alert(props) {
    if (!props.alert) {
        return null; // If alert is null, return null to render nothing
    }

  const wordToCapitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{wordToCapitalize(props.alert.type)}</strong> {props.alert.msg}
    </div>
  );
}

import React from 'react';
import Latex from '../../../src/components/latex';

// NOTE: mixing these in MDX was causing headaches. It's easier to just define everything in here.

export const I = () => (<Latex>i</Latex>);
export const J = () => (<Latex>j</Latex>);
export const S = () => (<Latex>s</Latex>);
export const X = () => (<Latex>x</Latex>);
export const C = () => (<Latex>c</Latex>);
export const P = () => (<Latex>p</Latex>);
export const Balance_i = () => (<Latex>B_i</Latex>);
export const Transfer_ij = () => (<Latex>T^i_j</Latex>);
export const Transfer_ps = () => (<Latex>T^p_s</Latex>);
export const Consumers_i = () => (<Latex>C_i</Latex>);
export const Suppliers_i = () => (<Latex>S_i</Latex>);

// Can use this as an alternative for short expressions
export const M = (props: { s: string }) => (<Latex>{`${props.s}`}</Latex>);

export const TransferVisual1 = () => (<Latex displayMode={true}>{String.raw`
\begin{matrix}
   a & \overrightarrow{T^a_b} & b \\
   \downarrow T^a_c & & \downarrow T^b_d \\
   c & \overrightarrow{T^c_d} & d
\end{matrix}
`}</Latex>);

export const TransferVisual2 = () => (<Latex displayMode={true}>{String.raw`
S_a = \emptyset, C_a = \{b, c\}\\
S_b = \{a\}, C_b = \{d\}\\
S_c = \{a\}, C_c = \{d\}\\
S_d = \{b, c\}, C_d = \emptyset
`}</Latex>);

type Props = { displayMode?: boolean };

export const SupplierConstraints = (props: Props) => (
	<Latex {...props}>{String.raw`B_s \geq 0, B_s = x - \sum_{i \in C_s} T^s_i`}</Latex>
);
export const ConsumerConstraints = (props: Props) => (
	<Latex {...props}>{String.raw`B_c = \sum_{i \in S_c} T^i_c`}</Latex>
);
export const PipeConstraints = (props: Props) => (
	<Latex {...props}>{String.raw`B_p = 0, B_p = (\sum_{i \in S_p} T^i_p) - (\sum_{i \in C_p} T^p_i)`}</Latex>
);

export const FixedTransferConstraints = (props: Props) => (
	<Latex {...props}>{String.raw`s \in S_c, c \in C_s, T^s_c = x, T^s_c = -T^c_s`}</Latex>
);
export const VariableTransferConstraints = (props: Props) => (
	<Latex {...props}>{String.raw`s \in S_p, p \in C_s, T^s_p \geq 0, T^s_p = -T^p_s`}</Latex>
);

export const SupplyAsMuchAsPossibleWeakConstraint = (props: Props) => (
	<Latex {...props}>{String.raw`T^p_s = \infty`}</Latex>
);
export const SupplyAsMuchAsNecessaryWeakConstraint = (props: Props) => (
	<Latex {...props}>T^p_s = 0</Latex>
);
